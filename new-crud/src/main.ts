import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule , { cors: true });
  app.use(cookieParser());
  app.enableCors()
  await app.listen(3000, () => {
      console.log(`
    ################################################
    🛡️  Server listening on port: 3000 🛡️
    ################################################
  `);
  })
} 
bootstrap();
