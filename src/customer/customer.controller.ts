import { CustomerService } from './customer.service';
import { Controller, Get, HttpException } from '@nestjs/common';
import { Customer } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async getBusinessPartners(): Promise<Customer[]> {
    return await this.customerService.getAllCustomer().catch((error) => {
      throw new HttpException(
        `Failed to get business partners - ${error.message}`,
        500,
      );
    });
  }
}
