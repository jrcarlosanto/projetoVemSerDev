import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
 const app = await NestFactory.create(AppModule);
 app.enableCors(); //liberar qualquer endereço front end para conssulta
 app.useGlobalPipes(new ValidationPipe());

 app.useGlobalFilters(new HttpExceptionFilter);  //Exception

 const config = new DocumentBuilder()
   .setTitle('Shopping list API')
   .setDescription('My shopping list API description')
   .setVersion('1.0')
   .build();
 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

 await app.listen(parseInt(process.env.SERVER_PORT));

 console.log();
 console.log(`Swagger: http://localhost:${parseInt(process.env.SERVER_PORT)}/api`)
}
bootstrap();
