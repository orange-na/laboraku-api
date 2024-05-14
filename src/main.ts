import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, () => {
    console.log(`now connecting on port ${process.env.PORT}...`);
  });
}
bootstrap();
