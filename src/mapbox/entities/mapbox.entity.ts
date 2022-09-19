import { Point } from 'geojson';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class geoMap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  latitude: string;

  @Column()
  longitutde: string;

  @Column()
  cityName: string;


  @Index({ spatial: true })
    @Column({
      type: 'geography',
      spatialFeatureType: 'Point',
      srid: 4326,
      nullable: true,
    })
    location: Point;
}

