import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as config from 'config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: config.get('server')['logging'] });
  app.useGlobalPipes(new ValidationPipe({transform: true}))
  await app.listen(3000);
}
bootstrap();
