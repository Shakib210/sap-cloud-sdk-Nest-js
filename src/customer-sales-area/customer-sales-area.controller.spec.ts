import { Test, TestingModule } from '@nestjs/testing';
import { CustomerSalesAreaController } from './customer-sales-area.controller';

describe('CustomerSalesAreaController', () => {
  let controller: CustomerSalesAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerSalesAreaController],
    }).compile();

    controller = module.get<CustomerSalesAreaController>(CustomerSalesAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
