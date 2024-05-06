import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Supermarket } from '../../supermarket/entities/supermarket.entity';
import { JoinTable } from 'typeorm/browser';

export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Supermarket)
  @JoinTable({name: 'market_id'})
  market: Supermarket;

  @Column()
  ean: string;

  @Column({ default: true })
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
