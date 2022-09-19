import { PartialType } from '@nestjs/mapped-types';
import { CreateMapboxDto } from './create-mapbox.dto';

export class UpdateMapboxDto extends PartialType(CreateMapboxDto) {}
