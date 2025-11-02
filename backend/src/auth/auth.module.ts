import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from '../auth/auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { JwtRefreshStrategy } from '../auth/strategies/jwt-refresh.strategy';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { MailModule } from 'src/mail/mail.module';
import { PasswordResetModule } from './password-reset.module';
import { FirebaseModule } from '../firebase/firebase.module';


@Module({
  imports: [
    ConfigModule,
    MailModule,
    PasswordResetModule, 
    FirebaseModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),

    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<string>('JWT_EXPIRES_IN', '15m') as any,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
