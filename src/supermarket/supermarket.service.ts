import { Injectable } from '@nestjs/common';
import { CreateSupermarketDto } from './dto/create-supermarket.dto';
import { UpdateSupermarketDto } from './dto/update-supermarket.dto';
import { Supermarket } from './entities/supermarket.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MarketProduct } from './entities/marketProduct.entity';
import { WorkingHours } from './entities/workingHours.entity';
import { ShoppingListItem } from '../shopping-list/entities/shopping-list-item.entity';
import { FindMarketMatchDto } from '../shopping-list/dto/find-market-match.dto';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class SupermarketService {
  constructor(
    @InjectRepository(Supermarket)
    private supermarketRepository: Repository<Supermarket>,
    @InjectRepository(WorkingHours)
    private workingHoursRepository: Repository<WorkingHours>,
    @InjectRepository(MarketProduct)
    private marketProductRepository: Repository<MarketProduct>,
    @InjectRepository(ShoppingListItem)
    private shoppingListItemRepository: Repository<ShoppingListItem>,
  ) {
  }

  create(createSupermarketDto: CreateSupermarketDto) {
    return 'This action adds a new supermarket';
  }

  findAll() {
    return `This action returns all supermarket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} supermarket`;
  }

  async findMarketMatch(findMarketMatchDto: FindMarketMatchDto) {
    const listProducts = await this.shoppingListItemRepository.find(
      {where: {listId: findMarketMatchDto.listId}}
    );
    const productsEan = listProducts.map((listProduct) => listProduct.ean);
    const res = await this.marketProductRepository.query(`
      WITH valid_supermarket as (
          SELECT id
          FROM supermarket
          WHERE ST_DWithin(
              ST_SetSRID(ST_MakePoint($1, $2),4326)::geography,
              coordinate_geom::geography,
              $3
          )
      ),
      market_matches as (
          SELECT market_id, SUM(price) AS total_price
          FROM market_product
          WHERE ean = ANY($4)
              AND market_id IN (SELECT id FROM valid_supermarket)
          GROUP BY market_id
          HAVING COUNT(DISTINCT ean) = $5
          ORDER BY total_price
      )
      SELECT s.id, s.name, s.url, s.address, mm.total_price
      FROM market_matches mm
      JOIN supermarket s ON s.id = mm.market_id;
    `, [
      findMarketMatchDto.latitude,
      findMarketMatchDto.longitude,
      findMarketMatchDto.distanceFilter,
      productsEan,
      productsEan.length
    ]);
    return res;
  }

  update(id: number, updateSupermarketDto: UpdateSupermarketDto) {
    return `This action updates a #${id} supermarket`;
  }

  remove(id: number) {
    return `This action removes a #${id} supermarket`;
  }
}
