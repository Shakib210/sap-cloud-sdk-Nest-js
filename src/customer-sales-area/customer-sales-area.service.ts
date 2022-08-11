import {
  CustomerSalesArea,
  businessPartnerService,
} from '@sap/cloud-sdk-vdm-business-partner-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerSalesAreaService {
  async getAllCustomerSalesArea(): Promise<CustomerSalesArea[]> {
    const { customerSalesAreaApi } = businessPartnerService();

    return await customerSalesAreaApi.requestBuilder().getAll().execute({
      destinationName: 'test-app',
    });
  }
}
