import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MapboxService } from './mapbox.service';
import { CreateMapboxDto } from './dto/create-mapbox.dto';
import { UpdateMapboxDto } from './dto/update-mapbox.dto';
import { parse } from 'papaparse';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { createReadStream, readFileSync } from 'fs';
import { Any } from 'typeorm';
import { Response } from '@nestjs/common';
@Controller('mapbox')
export class MapboxController {
  constructor(private readonly mapboxService: MapboxService) {}

  @Post('uploaded')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './mapbox1',
        filename: (req, file, callback) => {
          const fileExtName = extname(file.originalname);
          callback(null, `${file.originalname}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(csv)$/)) {
          return callback(new Error('Only CSV files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const csvFile = readFileSync(`mapbox1/${file.originalname}`);
    const csvData = csvFile.toString();
    const parsedCsv = await parse(csvData, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.toLowerCase().replace('#', '').trim(),
      complete: (results) => results.data,
    });
    console.log(parsedCsv.data[0]);
    var Point = {
      type: 'Point',
      coordinates: [parsedCsv.data[0].lat, parsedCsv.data[0].lon],
    };
    parsedCsv.data.forEach((element) => {
      var point = {
        type: 'Point',
        coordinates: [element.lat, element.lon],
      };
      const loadData = {
        id: parsedCsv.data[0].id,
        lat: parsedCsv.data[0].lat,
        lon: parsedCsv.data[0].lon,
        cityName: parsedCsv.data[0].cityname,
        location: Point,
      };
      console.log(loadData);
      this.mapboxService.create(loadData);
      const response = {
        message: 'File uploaded successfully!',
        data: {
          originalname: file.originalname,
          // filename: file.filename,
        },
      };
      return response;
    });
  }
  @Get()
  findAll() {
    return this.mapboxService.findAll();
  }
  getFile() {
    const file = createReadStream(join(process.cwd(), './mapbox1/data_1.csv'));
    console.log(file);
  }
}
