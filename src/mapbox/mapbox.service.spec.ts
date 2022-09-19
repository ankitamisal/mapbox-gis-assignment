import { Test, TestingModule } from '@nestjs/testing';
import { MapboxService } from './mapbox.service';

describe('MapboxService', () => {
  let service: MapboxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MapboxService],
    }).compile();

    service = module.get<MapboxService>(MapboxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
