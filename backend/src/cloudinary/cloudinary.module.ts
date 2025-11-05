import { Module } from '@nestjs/common';
import { UploadController } from './UploadController';
import { CloudinaryService } from './cloudinary.service';

@Module({
  controllers: [UploadController],
  providers: [CloudinaryService],
  exports: [CloudinaryService], 
})
export class UploadModule {}
