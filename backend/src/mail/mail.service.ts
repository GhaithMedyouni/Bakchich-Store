import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}

  async sendMail(dto: SendMailDto): Promise<void> {
    try {
      await this.mailerService.sendMail({
        to: dto.to,
        subject: dto.subject,
        template: dto.template,
        context: dto.context, // used by handlebars
      });
      this.logger.log(`Email sent to ${dto.to}`);
    } catch (err) {
      this.logger.error(`Failed to send email to ${dto.to}`, err.stack);
    }
  }

  // Specific reusable email use-cases
  async sendWelcomeEmail(to: string, name: string) {
    await this.sendMail({
      to,
      subject: 'Welcome to Our App 🎉',
      template: 'welcome',
      context: { name },
    });
  }

  async sendPasswordResetEmail(to: string, token: string) {
    await this.sendMail({
      to,
      subject: 'Password Reset Request 🔒',
      template: 'password-reset',
      context: { token },
    });
  }
}
