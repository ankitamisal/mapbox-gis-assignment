import { Test, TestingModule } from '@nestjs/testing';
import { MapboxController } from './mapbox.controller';
import { MapboxService } from './mapbox.service';

describe('MapboxController', () => {
  let controller: MapboxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapboxController],
      providers: [MapboxService],
    }).compile();

    controller = module.get<MapboxController>(MapboxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
