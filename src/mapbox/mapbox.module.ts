import { Module } from '@nestjs/common';
import { MapboxService } from './mapbox.service';
import { MapboxController } from './mapbox.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { geoMap } from './entities/mapbox.entity';

@Module({
  imports: [TypeOrmModule.forFeature([geoMap])],
  controllers: [MapboxController],
  providers: [MapboxService],
})
export class MapboxModule {}
