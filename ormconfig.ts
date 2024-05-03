import {ConfigModule} from "@nestjs/config";
import postgresConfig from "./src/config/postgres.config";

ConfigModule.forRoot({
  isGlobal: true,
  load: [postgresConfig],
})

export default postgresConfig()