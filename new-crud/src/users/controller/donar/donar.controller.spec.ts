import { Test, TestingModule } from '@nestjs/testing';
import { DonarController } from './donar.controller';

describe('DonarController', () => {
  let controller: DonarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonarController],
    }).compile();

    controller = module.get<DonarController>(DonarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
