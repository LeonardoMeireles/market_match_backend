import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user', synchronize: true})
export class AppUser {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

}
