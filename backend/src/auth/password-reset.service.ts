import { Injectable, BadRequestException, NotFoundException, ForbiddenException, Logger } from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { MailService } from '../mail/mail.service';
import * as argon2 from 'argon2';
import { randomInt } from 'crypto';
import { addMinutes } from 'date-fns';

@Injectable()
export class PasswordResetService {
  private readonly logger = new Logger(PasswordResetService.name);

  private readonly OTP_TTL_MINUTES = 15;
  private readonly OTP_LENGTH = 6;
  private readonly MAX_ATTEMPTS = 5;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  private generateOtp(): string {
    const max = 10 ** this.OTP_LENGTH;
    const val = randomInt(0, max);
    return val.toString().padStart(this.OTP_LENGTH, '0');
  }

  // Send OTP
  async createAndSendOtp(email: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) {
      this.logger.warn(`Password reset requested for non-existing email: ${email}`);
      return;
    }

    const otp = this.generateOtp();
    const otpHash = await argon2.hash(otp);
    const expiresAt = addMinutes(new Date(), this.OTP_TTL_MINUTES);

    // Invalidate previous unused OTPs
    await this.prisma.passwordReset.updateMany({
      where: { userId: user.id, used: false },
      data: { used: true },
    });

    await this.prisma.passwordReset.create({
      data: { userId: user.id, otpHash, expiresAt },
    });

    // Fire-and-forget email
    this.mailService.sendMail({
      to: user.email,
      subject: 'Password reset code',
      template: 'password-otp',
      context: { name: user.name || 'there', otp, expiresAt: expiresAt.toISOString() },
    }).catch(err => this.logger.error('Failed to send password reset email', err));
  }

  // Verify OTP only (do not mark used)
  async verifyOtp(email: string, otp: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('Invalid code or email');

    const reset = await this.prisma.passwordReset.findFirst({
      where: { userId: user.id, used: false },
      orderBy: { createdAt: 'desc' },
    });

    if (!reset) throw new NotFoundException('No reset request found');

    if (reset.expiresAt < new Date()) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { used: true } });
      throw new BadRequestException('Code expired');
    }

    if (reset.attempts >= this.MAX_ATTEMPTS) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { used: true } });
      throw new ForbiddenException('Too many attempts');
    }

    const matches = await argon2.verify(reset.otpHash, otp).catch(() => false);
    if (!matches) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { attempts: { increment: 1 } } });
      throw new BadRequestException('Invalid code');
    }

    return true; 
  }

  async resetPassword(email: string, otp: string, newPassword: string): Promise<void> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('Invalid request');

    const reset = await this.prisma.passwordReset.findFirst({
      where: { userId: user.id, used: false },
      orderBy: { createdAt: 'desc' },
    });

    if (!reset) throw new NotFoundException('No reset request found');

    if (reset.expiresAt < new Date()) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { used: true } });
      throw new BadRequestException('Code expired');
    }

    if (reset.attempts >= this.MAX_ATTEMPTS) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { used: true } });
      throw new ForbiddenException('Too many attempts');
    }

    const matches = await argon2.verify(reset.otpHash, otp).catch(() => false);
    if (!matches) {
      await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { attempts: { increment: 1 } } });
      throw new BadRequestException('Invalid code');
    }

    const newHash = await argon2.hash(newPassword);
    await this.prisma.user.update({ where: { id: user.id }, data: { password: newHash, refreshTokenHash: null } });

    await this.prisma.passwordReset.update({ where: { id: reset.id }, data: { used: true } });

    this.mailService.sendMail({
      to: user.email,
      subject: 'Your password was changed',
      template: 'password-changed',
      context: { name: user.name || 'there' },
    }).catch(err => this.logger.error('Failed to send confirmation email', err));
  }
}
