import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'The email address of the user',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Must be a valid email address' })
  email: string;

  @ApiProperty({
    description: 'The user password',
    example: 'StrongP@ssw0rd!',
  })
  @IsNotEmpty({ message: 'Password cannot be empty' })
  password: string;
}
