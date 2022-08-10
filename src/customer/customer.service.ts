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
      url: 'https://demo.derga.it:44370/',
      username: 'SFAUSER',
      password: 'SFAdevelop?2022',
    });
  }
}
