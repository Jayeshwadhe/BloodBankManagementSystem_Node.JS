import { Test, TestingModule } from '@nestjs/testing';
import { RequestServicesService } from './request-services.service';

describe('RequestServicesService', () => {
  let service: RequestServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestServicesService],
    }).compile();

    service = module.get<RequestServicesService>(RequestServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
