import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Supermarket } from './supermarket.entity';
import { Product } from '../../product/entities/product.entity';

@Entity('market_product')
export class MarketProduct {
  @PrimaryColumn('uuid')
  market_id: string;

  @PrimaryColumn()
  ean: string;

  @Column('numeric')
  price: number;

  @ManyToOne(type => Product, product => product.ean)
  @JoinColumn({name: 'ean'})
  public product!: Product;

  @ManyToOne(type => Supermarket, supermarket => supermarket.id)
  @JoinColumn({name: 'market_id'})
  public supermarket!: Supermarket;
}
