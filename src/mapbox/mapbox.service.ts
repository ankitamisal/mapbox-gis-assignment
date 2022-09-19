import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMapboxDto } from './dto/create-mapbox.dto';
import { UpdateMapboxDto } from './dto/update-mapbox.dto';
import { geoMap } from './entities/mapbox.entity';

@Injectable()
export class MapboxService {
  create: any;
  // create(createMapboxDto: CreateMapboxDto) {
  //   throw new Error('Method not implemented.');
  // }
  constructor(
    @InjectRepository(geoMap)
    private readonly MapRepository: Repository<geoMap>,
  ){}
  // create(createMapboxDto: CreateMapboxDto) {
  //   return 'This action adds a new mapbox';
  

  findAll():Promise<geoMap[]>{
    return this.MapRepository.find();
    
  }

  findOne(id: number) {
    return `This action returns a #${id} mapbox`;
  }

  update(id: number, updateMapboxDto: UpdateMapboxDto) {
    return `This action updates a #${id} mapbox`;
  }

  remove(id: number) {
    return `This action removes a #${id} mapbox`;
  }
}
