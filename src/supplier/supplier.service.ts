import {
  Supplier,
  businessPartnerService,
} from '@sap/cloud-sdk-vdm-business-partner-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupplierService {
  async getAllSupplier(): Promise<Supplier[]> {
    const { supplierApi } = businessPartnerService();

    return await supplierApi.requestBuilder().getAll().execute({
      url: 'https://demo.derga.it:44370/',
      username: 'SFAUSER',
      password: '******',
    });
  }
}
