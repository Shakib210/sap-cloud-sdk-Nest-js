import { Controller, Get, HttpException } from '@nestjs/common';
import { CustomerSalesArea } from '@sap/cloud-sdk-vdm-business-partner-service';
import { CustomerSalesAreaService } from './customer-sales-area.service';

@Controller('customer-sales-area')
export class CustomerSalesAreaController {
  constructor(private customerSalesAreaService: CustomerSalesAreaService) {}

  @Get()
  async getCustomerSalesArea(): Promise<CustomerSalesArea[]> {
    return await this.customerSalesAreaService
      .getAllCustomerSalesArea()
      .catch((error) => {
        throw new HttpException(
          `Failed to get business partners - ${error.message}`,
          500,
        );
      });
  }
}
