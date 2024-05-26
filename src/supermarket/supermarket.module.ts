import { Module } from '@nestjs/common';
import { SupermarketService } from './supermarket.service';
import { SupermarketController } from './supermarket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supermarket } from './entities/supermarket.entity';
import { MarketProduct } from './entities/marketProduct.entity';
import { WorkingHours } from './entities/workingHours.entity';
import { ShoppingListItem } from '../shopping-list/entities/shopping-list-item.entity';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { ShoppingListModule } from '../shopping-list/shopping-list.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Supermarket,
      MarketProduct,
      WorkingHours,
      ShoppingListItem,
    ])
  ],
  controllers: [SupermarketController],
  providers: [SupermarketService],
})
export class SupermarketModule {}
