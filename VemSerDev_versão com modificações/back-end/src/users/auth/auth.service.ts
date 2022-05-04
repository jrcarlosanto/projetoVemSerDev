import { Injectable } from '@nestjs/common';
import { UsersService } from '../users.service';
var bcrypt = require('bcryptjs');

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService) {}

  async login(userEmail: string, password: string): Promise<any> {
    const user = await this.usersService.findEmail(userEmail);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
 /* async login1(user: any) {
    const payload = { userEmail: user.userEmail, sub: user.userId };
    return {
      
    };
  }
  */
}
