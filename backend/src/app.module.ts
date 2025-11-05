import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../infra/prisma/prisma.module';
import { AuthModule } from './auth/auth.module'; 
import { MailModule } from './mail/mail.module';
import { UploadModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    PrismaModule,
    AuthModule, 
    MailModule,
    UploadModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
