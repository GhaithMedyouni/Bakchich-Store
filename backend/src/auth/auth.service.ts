import {
    Injectable,
    BadRequestException,
    UnauthorizedException,
    InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { RegisterDto } from '../auth/dto/register.dto';
import { LoginDto } from '../auth/dto/login.dto';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';
import { Tokens } from '../auth/interfaces/tokens.interface';
import { MailService } from '../mail/mail.service';
import { FirebaseService } from 'src/firebase/firebase.service';
import { VendorInfoDto } from './dto/vendor-info.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
        private readonly config: ConfigService,
        private readonly mailService: MailService,
        private readonly firebase: FirebaseService,
    ) { }

    private async hashData(data: string): Promise<string> {
        return argon2.hash(data);
    }

    // ================= REGISTER =================
    async register(dto: RegisterDto) {
        const existing = await this.prisma.user.findUnique({ where: { email: dto.email } });
        if (existing) throw new BadRequestException('Email already in use');

        const hashedPassword = await this.hashData(dto.password);

        const data: any = {
            email: dto.email,
            password: hashedPassword,
            name: dto.name ?? null,
            role: dto.role ?? 'USER',
        };

        // If role is VENDOR, attach vendorInfo
        if (dto.role === 'VENDOR' && dto.vendorInfo) {
            const { categories,photo, ...vendorData } = dto.vendorInfo;

            data.vendorInfo = {
                create: {
                    ...vendorData,
                    photo,
                    categories: categories?.length
                        ? {
                            connectOrCreate: categories.map((cat) => ({
                                where: { name: cat },  
                                create: { name: cat },
                            })),
                        }
                        : undefined,
                },
            };
        }

        const user = await this.prisma.user.create({
            data,
            include: { vendorInfo: true }, 
        });

        // Send welcome email
        this.mailService.sendWelcomeEmail(user.email, user.name || 'there');

        return {
            message: 'User registered successfully. Please log in.',
            user,
        };
    }

    // ================= LOGIN =================
    async login(dto: LoginDto): Promise<Tokens> {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
            include: { vendorInfo: true },
        });

        if (!user) throw new UnauthorizedException('Invalid credentials');

        const pwMatches = await argon2.verify(user.password, dto.password).catch(() => false);
        if (!pwMatches) throw new UnauthorizedException('Invalid credentials');

        const tokens = await this.getTokens(user.id, user.email, user.role);
        await this.updateRefreshTokenHash(user.id, tokens.refreshToken);

        return tokens;
    }

    // ================= REFRESH TOKEN =================
    async refresh(dto: { refreshToken: string }): Promise<Tokens> {
        try {
            const payload = this.jwtService.verify(dto.refreshToken, {
                secret: this.config.get<string>('JWT_REFRESH_SECRET'),
            });

            const userId = payload.sub;
            const user = await this.prisma.user.findUnique({ where: { id: userId } });
            if (!user || !user.refreshTokenHash) throw new UnauthorizedException('Invalid token');

            const valid = await argon2.verify(user.refreshTokenHash, dto.refreshToken).catch(() => false);
            if (!valid) throw new UnauthorizedException('Invalid token');

            const tokens = await this.getTokens(user.id, user.email, user.role);
            await this.updateRefreshTokenHash(user.id, tokens.refreshToken);

            return tokens;
        } catch (err) {
            if (err instanceof UnauthorizedException) throw err;
            throw new UnauthorizedException('Invalid token');
        }
    }

    // ================= LOGOUT =================
    async logout(userId: string) {
        await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash: null } });
        return { success: true };
    }

    // ================= LOGIN WITH GOOGLE =================
    async loginWithGoogle(idToken: string): Promise<Tokens> {
        const firebaseUser = await this.firebase.verifyIdToken(idToken);
        if (!firebaseUser || !firebaseUser.email) throw new UnauthorizedException('Invalid Google token');

        let user = await this.prisma.user.findUnique({
            where: { email: firebaseUser.email },
            include: { vendorInfo: true },
        });

        if (!user) {
            user = await this.prisma.user.create({
                data: {
                    email: firebaseUser.email,
                    name: firebaseUser.name || 'Unknown',
                    password: await argon2.hash(Math.random().toString()),
                    googleId: firebaseUser.uid,
                    role: 'USER',
                },
                include: { vendorInfo: true },
            });
        }

        const tokens = await this.getTokens(user.id, user.email, user.role);
        await this.updateRefreshTokenHash(user.id, tokens.refreshToken);

        return tokens;
    }

    // ================= TOKENS =================
    private async getTokens(userId: string, email: string, role: string): Promise<Tokens> {
        const accessPayload = { sub: userId, email, role };
        const refreshPayload = { sub: userId };

        const accessToken = await this.jwtService.signAsync(accessPayload, {
            secret: this.config.get<string>('JWT_SECRET')!,
            expiresIn: this.config.get<string>('JWT_EXPIRES_IN', '15m') as any,
        });

        const refreshToken = await this.jwtService.signAsync(refreshPayload, {
            secret: this.config.get<string>('JWT_REFRESH_SECRET')!,
            expiresIn: this.config.get<string>('JWT_REFRESH_EXPIRES_IN', '7d') as any,
        });

        return { accessToken, refreshToken };
    }

    private async updateRefreshTokenHash(userId: string, refreshToken: string): Promise<void> {
        try {
            const hash = await this.hashData(refreshToken);
            await this.prisma.user.update({ where: { id: userId }, data: { refreshTokenHash: hash } });
        } catch (err) {
            throw new InternalServerErrorException('Could not store refresh token');
        }
    }
}
