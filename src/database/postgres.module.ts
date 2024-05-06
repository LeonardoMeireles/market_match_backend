import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";

import postgresConfig from "../config/postgres.config";

@Module({})
export class PostgresModule {
  static forRoot(enableBD: string){
    let postgres = [];

    if(enableBD && enableBD.toLowerCase() == 'true'){
      postgres = [
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({...configService.get('postgresConfig')})
        }),
      ]
    }

    return postgres;
  }
}
