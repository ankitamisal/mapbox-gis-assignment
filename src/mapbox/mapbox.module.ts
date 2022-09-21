import { Module } from '@nestjs/common';
import { MapboxService } from './mapbox.service';
import { MapboxController } from './mapbox.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { geoMap } from './entities/mapbox.entity';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([geoMap]),
    // MulterModule.register({
    //   dest: './upload/1.csv',
    // }),
  ],
  controllers: [MapboxController],
  providers: [MapboxService],
})
export class MapboxModule {}
