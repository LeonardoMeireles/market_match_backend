import {Controller, Get, UseGuards} from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator, HealthCheck } from '@nestjs/terminus';
import {AuthorizationGuard} from "../authorization/authorization.guard";

@Controller('health')
export class HealthController {
    constructor(
        private health: HealthCheckService,
        private typeorm: TypeOrmHealthIndicator,
    ) {}

    @UseGuards(AuthorizationGuard)
    @Get()
    @HealthCheck()
    check() {
        const checkArray = [];
        if(process.env.ENABLED_DB && process.env.ENABLED_DB.toLowerCase() == 'true'){
            checkArray.push(() => this.typeorm.pingCheck('postgres'))
        }
        return this.health.check(checkArray);
    }
}