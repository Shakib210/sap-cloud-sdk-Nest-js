import { Batch, batchService } from '@sap/cloud-sdk-vdm-batch-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BatchService {
  async getAllBusinessPartners(): Promise<Batch[]> {
    const { batchApi } = batchService();
    return await batchApi.requestBuilder().getAll().execute({
      url: 'https://demo.derga.it:44370/',
      username: 'SFAUSER',
      password: '***********',
    });
  }
}
