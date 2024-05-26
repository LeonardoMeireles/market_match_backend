import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryColumn()
  ean: string;

  @Column()
  name: string;

  @Column({nullable: true})
  description: string;
}
