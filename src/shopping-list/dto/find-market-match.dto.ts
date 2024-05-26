import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingListDto } from './create-shopping-list.dto';

export class FindMarketMatchDto {
  listId: string;
  latitude: number;
  longitude: number;
  distanceFilter: number; //Amount given in meters
}
