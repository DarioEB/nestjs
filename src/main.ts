import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      // El whitelist solo toma los datos del body
      // que realimente necesitamos, son removidos
      whitelist: true,
      // Enviar un badquest al uusario de la API
      // Para que envia la información justa y necesaria
      forbidNonWhitelisted: true
    })
  )

  await app.listen(3000);
}
main();
