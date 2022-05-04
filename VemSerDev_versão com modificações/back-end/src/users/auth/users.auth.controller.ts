import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/users/auth/auth.service';
import { CreateUserAuthDto } from './dto/create-user-auth.dto';


@Controller('auth')
export class UsersAuthController {
  constructor( private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() createUserAuthDto: CreateUserAuthDto) {
    return this.authService.login(createUserAuthDto.email, createUserAuthDto.password);
  }

}
