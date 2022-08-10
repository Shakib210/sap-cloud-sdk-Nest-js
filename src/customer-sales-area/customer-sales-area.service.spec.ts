import { Test, TestingModule } from '@nestjs/testing';
import { CustomerSalesAreaService } from './customer-sales-area.service';

describe('CustomerSalesAreaService', () => {
  let service: CustomerSalesAreaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerSalesAreaService],
    }).compile();

    service = module.get<CustomerSalesAreaService>(CustomerSalesAreaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
