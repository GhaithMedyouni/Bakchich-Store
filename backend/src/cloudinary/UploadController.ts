import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
  Req,
  UseGuards,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'infra/prisma/prisma.service';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly cloudinaryService: CloudinaryService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('vendor-photo')
  @UseInterceptors(FileInterceptor('file'))
  async uploadTemp(@UploadedFile() file: Express.Multer.File) {
    const url = await this.cloudinaryService.uploadImage(file.buffer, 'vendor-photos/temp');
    return { photoUrl: url };
  }

}
