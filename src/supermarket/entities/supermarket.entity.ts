import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';

@Entity('supermarket')
export class Supermarket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({nullable: true})
  zip_code: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'Point',
    srid: 4326,
  })
  coordinate_geom: Point;

  @Column({nullable: true})
  cnpj: string;

  @Column('numeric', {nullable: true})
  delivery_price: number;

  @Column()
  takeout: boolean;
}
