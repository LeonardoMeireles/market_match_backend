import {Module} from '@nestjs/common';
import {TerminusModule, TypeOrmHealthIndicator} from '@nestjs/terminus';
import {HealthController} from './health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
})
export class HealthModule {
}