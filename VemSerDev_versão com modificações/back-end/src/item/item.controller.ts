import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.itemService.findAll(userId);
  }

  @Get(':userId/:id')
  findOne(@Param('userId') userId: string,@Param('id') id: string) {
    return this.itemService.findOne(userId,id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(id, updateItemDto);
  }

  @Delete(':userId/:id')
  remove(@Param('userId') userId: string,@Param('id') id: string) {
    return this.itemService.remove(userId,id);
  }
}
