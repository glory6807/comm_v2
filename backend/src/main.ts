import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted:true,
      transform:true
    })
  );

  await app.listen(8080, ()=>{
    console.log("-------------------------------------------------------------------------");
    console.log("COMM_V2 Backend API Server is running...");
    console.log("Server 8080 Port Listening...");
    console.log("-------------------------------------------------------------------------");
  });

}
bootstrap();
