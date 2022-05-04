import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
var bcrypt = require('bcryptjs');

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private readonly repository: Repository<User>) { }

  create(createUserDto: CreateUserDto): Promise<User> {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(createUserDto.password, salt); //criptografando a senha com bcrypt.js
    createUserDto.password = hash;
    
    const user = this.repository.create(createUserDto);
    return this.repository.save(user);
  
 }

 findAll(): Promise<User[]> {
  return this.repository.find(
    {order:{name: `ASC`}});
}

  findOne(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  findEmail(userEmail: string): Promise<User | undefined> {
    return this.repository.findOne({where:[{email: userEmail}]});
  }
 
  /*findByUsernameAndPassword(createUserDto: CreateUserDto):  Promise<User | null> {
    
    //var salt = bcrypt.genSaltSync(10);
    //var hash = bcrypt.hashSync(createUserDto.password, salt);
    //console.log(hash);
    //bcrypt.compareSync("B4c0/\/", hash); //comparar senhas
   /*
    return this.repository.findOne({where:[
     {name: createUserDto.name, 
      password: (password) => {bcrypt.compareSync(createUserDto.password, password)}}
    ]}) || null;
    
    */
    
   /* const users = this.repository.find({where:[{name: createUserDto.name}]}); 
    console.log(users);
    */
    /*
    for(let i =0; i < users.length; i++){
      if(bcrypt.compareSync(createUserDto.password, users.password))
        return 
    }
     
    return this.repository.findOne({where:[{name: createUserDto.name}]}) || null;
    
  }
  */

  async update(id: string, updateItemDto: UpdateUserDto): Promise<User> {
    const item = await this.repository.preload({
      id: id,
      ...updateItemDto,
    });
    if (!item) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(item);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.repository.remove(user);
  }

}
