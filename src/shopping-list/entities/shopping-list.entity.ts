import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AppUser } from '../../user/entities/appUser.entity';

@Entity('list')
export class ShoppingList {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({name: 'created_by'})
  createdBy: string;

  @ManyToOne(type => AppUser, user => user.id)
  @JoinColumn({name: 'created_by'})
  public user!: AppUser;
}
