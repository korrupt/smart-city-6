import { Test, TestingModule } from '@nestjs/testing';
import { NestLoggerService } from './nest-logger.service';

describe('NestLoggerService', () => {
  let service: NestLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestLoggerService],
    }).compile();

    service = module.get<NestLoggerService>(NestLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
