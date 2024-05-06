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

@Module({
  imports: [
    HealthModule,
    AuthorizationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [postgresConfig]
    }),
    ...PostgresModule.forRoot(process.env.ENABLED_DB),
    ProductModule,
    SupermarketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor() {
  }
}
