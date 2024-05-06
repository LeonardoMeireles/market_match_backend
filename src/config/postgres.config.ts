import { registerAs } from '@nestjs/config';

export default registerAs('postgresConfig', () => {
  return {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    autoLoadEntities: true,
    entities: [
      'src/product/entities/*.ts',
      'src/supermarket/entities/*.ts',
    ],
    migrations: [],
    synchronize: true,
    cli: {
      migrationsDir: 'src/database/migrations'
    }
  };
});