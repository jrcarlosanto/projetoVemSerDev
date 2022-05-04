import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/item/entities/item.entity';
import { UsersAuthController } from './auth/users.auth.controller';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Item])],
  controllers: [UsersController, UsersAuthController],
  providers: [UsersService, AuthService],
  exports: [UsersService ,AuthService],
})
export class UsersModule {}
