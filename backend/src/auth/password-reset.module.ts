import { Module } from '@nestjs/common';
import { PasswordResetController } from './password-reset.controller';
import { PasswordResetService } from './password-reset.service';
import { PrismaService } from '../../infra/prisma/prisma.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule], // to send OTP emails
  controllers: [PasswordResetController],
  providers: [PasswordResetService, PrismaService],
  exports: [PasswordResetService],
})
export class PasswordResetModule {}
