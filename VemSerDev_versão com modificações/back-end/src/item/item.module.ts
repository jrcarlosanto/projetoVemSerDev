import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggingMiddleware } from 'src/common/middleware/logging.middleware';
import { User } from 'src/users/entities/user.entity';
import { Item } from './entities/item.entity';
import { ItemController } from './item.controller';
import { ItemService } from './item.service';

@Module({
 imports: [TypeOrmModule.forFeature([Item,User])],
 controllers: [ItemController],
 providers: [ItemService]
})
export class ItemModule implements NestModule { //adicionando o Middleware 
    configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggingMiddleware).forRoutes("/")
    }
  }
