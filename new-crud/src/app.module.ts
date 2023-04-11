import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { MailerModule } from '@nestjs-modules/mailer'
// import { nodemailer } from 'nodemailer'
// import { DonarController } from './users/controller/donar/donar.controller';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/BloodBank')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
