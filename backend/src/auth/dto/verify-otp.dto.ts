import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyOtpDto {
  @ApiProperty({
    description: 'Email of the user to verify the OTP',
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
}
