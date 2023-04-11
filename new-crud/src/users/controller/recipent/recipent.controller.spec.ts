import { Test, TestingModule } from '@nestjs/testing';
import { RecipentController } from './recipent.controller';

describe('RecipentController', () => {
  let controller: RecipentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipentController],
    }).compile();

    controller = module.get<RecipentController>(RecipentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
