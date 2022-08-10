import { Controller, Get, HttpException } from '@nestjs/common';
import { Batch } from '@sap/cloud-sdk-vdm-batch-service';
import { BatchService } from './batch.service';

@Controller('batch')
export class BatchController {
  constructor(private batchService: BatchService) {}

  @Get()
  async getBusinessPartners(): Promise<Batch[]> {
    return await this.batchService.getAllBusinessPartners().catch((error) => {
      console.log(error);
      throw new HttpException(
        `Failed to get business partners - ${error.message}`,
        500,
      );
    });
  }
}
