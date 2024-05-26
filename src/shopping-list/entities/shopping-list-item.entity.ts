import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from '../../user/entities/appUser.entity';
import { Product } from '../../product/entities/product.entity';
import { ShoppingList } from './shopping-list.entity';

@Entity('list_item')
export class ShoppingListItem {

  @PrimaryColumn({name: 'list_id'})
  listId: string;

  @PrimaryColumn({name: 'ean'})
  ean: string;

  @ManyToOne(type => Product, product => product.ean)
  @JoinColumn({name: 'ean'})
  public product!: Product;


  @ManyToOne(type => ShoppingList, list => list.id)
  @JoinColumn({name: 'list_id'})
  public list!: ShoppingList;
}
