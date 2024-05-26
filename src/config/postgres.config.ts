import { registerAs } from '@nestjs/config';
import * as fs from 'fs';
import { join } from 'path';
import { Product } from '../product/entities/product.entity';
import { Supermarket } from '../supermarket/entities/supermarket.entity';
import { WorkingHours } from '../supermarket/entities/workingHours.entity';
import { MarketProduct } from '../supermarket/entities/marketProduct.entity';
import { createTables1716336776747 } from '../database/migrations/1716336776747-createTables';
import { ShoppingList } from '../shopping-list/entities/shopping-list.entity';
import { ShoppingListItem } from '../shopping-list/entities/shopping-list-item.entity';
import { AppUser } from '../user/entities/appUser.entity';
import { createProductList1716343916526 } from '../database/migrations/1716343916526-createProductList';

export default registerAs('postgresConfig', () => {
  return {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
    entities: [
      Product,
      Supermarket,
      WorkingHours,
      MarketProduct,
      AppUser,
      ShoppingList,
      ShoppingListItem,
    ],
    migrations: [
      createTables1716336776747,
      createProductList1716343916526
    ],
    cli: {
      migrationsDir: 'src/database/migrations'
    },
    ssl: {
      ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
    },
  };
});