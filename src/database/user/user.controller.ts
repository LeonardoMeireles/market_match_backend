import { Body, Controller, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersServices: UserService) {}

  @Post('create-user')
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

}