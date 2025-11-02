import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { PasswordResetService } from './password-reset.service';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Authentication / Password Reset')
@Controller('auth')
export class PasswordResetController {
  constructor(private readonly service: PasswordResetService) {}

  @HttpCode(HttpStatus.OK)
  @Post('forgot-password')
  @ApiOperation({ summary: 'Request password reset OTP' })
  @ApiBody({ type: ForgotPasswordDto })
  @ApiResponse({ status: 200, description: 'If the email exists, a reset code was sent (always returns 200 to avoid user enumeration)' })
  async forgot(@Body() dto: ForgotPasswordDto) {
    await this.service.createAndSendOtp(dto.email);
    return { message: 'If the email exists, a reset code was sent' };
  }

  @HttpCode(HttpStatus.OK)
  @Post('verify-otp')
  @ApiOperation({ summary: 'Verify OTP sent to user email' })
  @ApiBody({ type: VerifyOtpDto })
  @ApiResponse({ status: 200, description: 'OTP is valid', schema: { example: { valid: true } } })
  @ApiResponse({ status: 400, description: 'Invalid code or code expired' })
  @ApiResponse({ status: 403, description: 'Too many attempts' })
  async verify(@Body() dto: VerifyOtpDto) {
    await this.service.verifyOtp(dto.email, dto.otp);
    return { valid: true };
  }

  @HttpCode(HttpStatus.OK)
  @Post('reset-password')
  @ApiOperation({ summary: 'Reset password using OTP' })
  @ApiBody({ type: ResetPasswordDto })
  @ApiResponse({ status: 200, description: 'Password reset successful', schema: { example: { message: 'Password reset successful. Please log in with the new password.' } } })
  @ApiResponse({ status: 400, description: 'Invalid code or code expired' })
  @ApiResponse({ status: 403, description: 'Too many attempts' })
  async reset(@Body() dto: ResetPasswordDto) {
    await this.service.resetPassword(dto.email, dto.otp, dto.newPassword);
    return { message: 'Password reset successful. Please log in with the new password.' };
  }
}
