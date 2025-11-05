import { IsNotEmpty, IsOptional, IsArray, IsEnum, IsUrl } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { StoreCategory } from '../enums/store-category.enum';

export class VendorInfoDto {
  @ApiProperty({ description: 'Company/store name', example: 'Acme Inc.' })
  @IsNotEmpty()
  companyName: string;

  @ApiPropertyOptional({ description: 'Company/store address', example: '123 Main St' })
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ description: 'Phone number', example: '+1234567890' })
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({
    description: 'Store categories',
    example: ['gaming', 'podcast'],
    enum: StoreCategory,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @IsEnum(StoreCategory, { each: true }) // validate each element is in the enum
  categories?: StoreCategory[];

  @ApiPropertyOptional({ description: 'Profile photo URL', example: 'https://res.cloudinary.com/.../photo.jpg' })
  @IsOptional()
  @IsUrl()
  photo?: string;
}
