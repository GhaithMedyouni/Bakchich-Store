import { IsEmail, IsNotEmpty, MinLength, IsOptional, ValidateNested, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { VendorInfoDto } from './vendor-info.dto';
import { UserRole } from '../enums/user-role.enum';

export class RegisterDto {
  @ApiProperty({ description: 'User email', example: 'user@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', example: 'strongPassword123' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiPropertyOptional({ description: 'User name', example: 'John Doe' })
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'Role of the user', example: 'VENDOR', enum: UserRole })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @ApiPropertyOptional({
    description: 'Vendor information, required if role is VENDOR',
    type: VendorInfoDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => VendorInfoDto)
  vendorInfo?: VendorInfoDto;
}
