import { IsEmail, IsNotEmpty, MinLength, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @ApiProperty({
    description: 'Email of the user requesting password reset',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @ApiProperty({
    description: 'OTP sent to the user email',
    example: '123456',
  })
  @IsNotEmpty({ message: 'OTP cannot be empty' })
  @Length(4, 8, { message: 'OTP must be between 4 and 8 characters' })
  otp: string;

  @ApiProperty({
    description: 'New password for the user (minimum 6 characters)',
    example: 'newSecurePass123',
  })
  @IsNotEmpty({ message: 'New password cannot be empty' })
  @MinLength(6, { message: 'New password must be at least 6 characters' })
  newPassword: string;
}
