import {Injectable} from '@nestjs/common';
import {UserEntity} from '../entities/user.entity';
import CreateUserDto from "../dto/create-user.dto";

@Injectable()
export class UserService {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    userEntity.firstName = userDetails.firstName;
    userEntity.lastName = userDetails.lastName;
    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }

}