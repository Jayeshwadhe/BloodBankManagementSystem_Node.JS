import { Test, TestingModule } from '@nestjs/testing';
import { RecipentService } from './recipent.service';

describe('RecipentService', () => {
  let service: RecipentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipentService],
    }).compile();

    service = module.get<RecipentService>(RecipentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
