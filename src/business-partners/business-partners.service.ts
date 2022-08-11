import { Injectable } from '@nestjs/common';
import {
  businessPartnerService,
  BusinessPartner,
} from '@sap/cloud-sdk-vdm-business-partner-service';

@Injectable()
export class BusinessPartnersService {
  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    const { businessPartnerApi } = businessPartnerService();
    return await businessPartnerApi.requestBuilder().getAll().execute({
      destinationName: 'test-app',
    });
  }
}
