import {
  businessPartnerService,
  Customer,
} from '@sap/cloud-sdk-vdm-business-partner-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  async getAllCustomer(): Promise<Customer[]> {
    const { customerApi } = businessPartnerService();
    return await customerApi.requestBuilder().getAll().execute({
      destinationName: 'test-app',
    });
  }
}
