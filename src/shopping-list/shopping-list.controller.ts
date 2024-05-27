import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { CreateSupermarketDto } from '../supermarket/dto/create-supermarket.dto';
import { EditShoppingListProduct } from './dto/edit-to-shopping-list.dto';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) {
  }

  @Post()
  async create(@Body() createShoppingListDto: CreateShoppingListDto) {
    return await this.shoppingListService.create(createShoppingListDto);
  }

  @Get()
  findAll() {
    return this.shoppingListService.findAll();
  }

  @Get('/user/:userId')
  async findAllUser(@Param('userId') userId: string) {
    return await this.shoppingListService.findAllUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingListService.findOne(+id);
  }

  @Get('/list-products/:listId')
  async getProductsFromList(@Param('listId') listId: string) {
    return await this.shoppingListService.getProductsFromList(listId);
  }

  @Post('/add-to-list')
  async addToList(@Body() editShoppingListProduct: EditShoppingListProduct) {
    return await this.shoppingListService.addToList(editShoppingListProduct);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
    return this.shoppingListService.update(+id, updateShoppingListDto);
  }

  @Post('/remove-product')
  async removeFromList(@Body() editShoppingListProduct: EditShoppingListProduct) {
    return await this.shoppingListService.removeFromList(editShoppingListProduct);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListService.remove(+id);
  }
}
