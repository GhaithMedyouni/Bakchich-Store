import { IsEmail, IsNotEmpty, IsOptional, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SendMailDto {
  @ApiProperty({
    description: 'Recipient email address',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  to: string;

  @ApiProperty({
    description: 'Email subject',
    example: 'Welcome to our platform!',
  })
  @IsNotEmpty({ message: 'Subject cannot be empty' })
  subject: string;

  @ApiProperty({
    description: 'Template name to use for the email',
    example: 'welcome-email',
  })
  @IsNotEmpty({ message: 'Template cannot be empty' })
  template: string;

  @ApiPropertyOptional({
    description: 'Optional context variables for the template',
    example: { name: 'John', otp: '123456' },
    type: 'object',
    additionalProperties: true, 
  })
  @IsOptional()
  @IsObject({ message: 'Context must be an object' })
  context?: Record<string, any>;
}
