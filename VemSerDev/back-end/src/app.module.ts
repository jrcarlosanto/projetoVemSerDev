import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './common/middleware/logging.middleware';
import { ItemModule } from './item/item.module';

@Module({
 imports: [
   ConfigModule.forRoot(),
   TypeOrmModule.forRoot({
     type: 'postgres',
     host: process.env.DB_HOST,
     port: parseInt(process.env.DB_PORT),
     username: process.env.DB_USERNAME,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE,
     entities: [__dirname + '/**/*.entity{.ts,.js}'],
     synchronize: (process.env.DB_SYNCHRONIZE === 'true'),
     ssl: {
       rejectUnauthorized: false
     }
   }),
   ItemModule,
 ],
 controllers: [AppController],
 providers: [AppService],
})
export class AppModule implements NestModule { //adicionando o Middleware 
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes("/")
  }
}