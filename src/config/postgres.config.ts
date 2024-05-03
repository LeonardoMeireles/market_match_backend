import {registerAs} from "@nestjs/config";
import {UserEntity} from "../database/entities/user.entity";
import {UserMigration1653653980931 as UserMigration} from "../database/migrations/1653653980931UserMigration";

export default registerAs('postgresConfig', () => {
  return {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    autoLoadEntities: true,
    entities: [UserEntity],
    migrations: [UserMigration],
    synchronize: true,
    cli: {
      entitiesDir: "src/database/entities",
      migrationsDir: "src/database/migrations"
    }
  }
})