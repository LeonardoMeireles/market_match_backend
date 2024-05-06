import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Point } from 'geojson';

export class Supermarket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  zip_code: string;

  @Column()
  address: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column({
    type: 'geometry',
    spatialFeatureType: 'LineString',
    srid: 4326,
  })
  coordinate_geom: Point;

  @Column()
  cnpj: string;

  @Column()
  delivery_price: number;

  @Column()
  takeout: boolean;
}
