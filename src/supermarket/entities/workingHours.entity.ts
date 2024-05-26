import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp } from 'typeorm';
import { Supermarket } from '../../supermarket/entities/supermarket.entity';
import { Product } from '../../product/entities/product.entity';

export enum DayOfWeek {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday'
}

@Entity('working_hours')
export class WorkingHours {
  @PrimaryColumn('uuid', {name: 'market_id'})
  marketId: string;

  @PrimaryColumn({type: 'enum', enum: DayOfWeek, name: 'day_of_week'})
  dayOfWeek: DayOfWeek;

  @Column('time', {name: 'opening_time', nullable: true})
  openingTime: Date;

  @Column('time', {name: 'closing_time', nullable: true})
  closingTime: Date;

  @ManyToOne(type => Supermarket, supermarket => supermarket.id)
  @JoinColumn({name: 'market_id'})
  public supermarket!: Supermarket;
}
