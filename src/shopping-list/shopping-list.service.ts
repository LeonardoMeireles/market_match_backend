import { Injectable } from '@nestjs/common';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { ShoppingList } from './entities/shopping-list.entity';
import { ShoppingListItem } from './entities/shopping-list-item.entity';
import { EditShoppingListProduct } from './dto/edit-to-shopping-list.dto';

@Injectable()
export class ShoppingListService {

  constructor(
    @InjectRepository(ShoppingList)
    private shoppingListRepository: Repository<ShoppingList>,
    @InjectRepository(ShoppingListItem)
    private shoppingListItemRepository: Repository<ShoppingListItem>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {
  }

  create(createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListRepository.save({
      name: createShoppingListDto.name,
      createdBy: createShoppingListDto.userId
    });
  }

  findAll() {
    return `This action returns all shoppingList`;
  }

  findAllUser(userId: string) {
    return this.shoppingListRepository.find({where: {createdBy: userId}});
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  async getProductsFromList(listId: string) {
    return await this.shoppingListItemRepository.find({
      select: ['product'],
      relations: ['product'],
      where: {listId}
    });
  }

  async addToList(addProductToListDto: EditShoppingListProduct) {
    await this.shoppingListItemRepository.save(addProductToListDto);
    return this.productRepository.findOne(addProductToListDto.ean);
  }

  async removeFromList(removeProductFromListDto: EditShoppingListProduct) {
    return await this.shoppingListItemRepository.delete({
      listId: removeProductFromListDto.listId,
      ean: removeProductFromListDto.ean
    });
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}
