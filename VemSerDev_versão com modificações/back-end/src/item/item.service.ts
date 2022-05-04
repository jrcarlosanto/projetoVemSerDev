import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
 constructor(@InjectRepository(Item) private readonly repository: Repository<Item>) { }

 create(createItemDto: CreateItemDto): Promise<Item> {
   const item = this.repository.create(createItemDto);
   return this.repository.save(item);
 }

 findAll(userId: string): Promise<Item[]> {
   return this.repository.find({order:{name: `ASC`},where:[{userId: userId}]});
 }

 findOne(userId: string,id: string): Promise<Item> {
  return this.repository.findOne({where:[{userId: userId} && {id: id}]});
}

 async update(id: string, updateItemDto: UpdateItemDto): Promise<Item> {
   const item = await this.repository.preload({
     id: id,
     ...updateItemDto,
   });
   if (!item) {
     throw new NotFoundException(`Item ${id} not found`);
   }
   return this.repository.save(item);
 }

 async remove(userId: string, id: string) {
   const item = await this.findOne(userId, id);
   return this.repository.remove(item);
 }
}
