import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/config';

async function bootstrap() {
  const config = new AppConfig();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/' + config.VERSION_APP);
  await app.listen(config.PORT);
}
bootstrap();
