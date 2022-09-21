import { Injectable } from '@nestjs/common';
import { CreateMapboxDto } from './dto/create-mapbox.dto';
import { UpdateMapboxDto } from './dto/update-mapbox.dto';
import { geoMap } from './entities/mapbox.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class MapboxService {
  constructor(
    @InjectRepository(geoMap)
    private readonly MapRepository: Repository<geoMap>,
  ) {}
  create(createMapboxDto: CreateMapboxDto) {
    return this.MapRepository.save(createMapboxDto);
  }
  // }
  findAll(): Promise<geoMap[]> {
    return this.MapRepository.find();
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} map`;
  // }
  // update(id: number, updateMapDto: UpdateMapDto) {
  //   return `This action updates a #${id} map`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} map`;
  // }
}
