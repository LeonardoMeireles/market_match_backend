import {Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthorizationGuard } from "./authorization/authorization.guard";
import {UseGuards} from "@nestjs/common";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthorizationGuard)
  @Get('/test-auth')
  getTestAuth(): string {
    return this.appService.getAuth();
  }
}
