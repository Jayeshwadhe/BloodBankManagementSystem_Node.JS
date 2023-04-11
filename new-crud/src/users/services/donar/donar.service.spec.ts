import { Test, TestingModule } from '@nestjs/testing';
import { DonarService } from './donar.service';

describe('DonarService', () => {
  let service: DonarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonarService],
    }).compile();

    service = module.get<DonarService>(DonarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
