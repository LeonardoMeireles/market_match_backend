import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from 'src/health/health.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { PostgresModule } from './database/postgres.module';
import { ProductModule } from './product/product.module';
import { SupermarketModule } from './supermarket/supermarket.module';

import postgresConfig from './config/postgres.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    HealthModule,
    AuthorizationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [postgresConfig],
    }),
    ...PostgresModule.forRoot(process.env.ENABLED_DB),
    ProductModule,
    SupermarketModule,
    UserModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
  }
}
