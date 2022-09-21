import { PartialType } from '@nestjs/mapped-types';
import { CreateMapboxDto } from './create-mapbox.dto';

export class UpdateMapboxDto {
  id: number;
  lat: string;
  lon: string;
  cityName: string;
}
