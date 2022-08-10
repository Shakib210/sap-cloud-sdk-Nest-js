import { Controller, Get, HttpException } from '@nestjs/common';
import { Supplier } from '@sap/cloud-sdk-vdm-business-partner-service';
import { SupplierService } from './supplier.service';

@Controller('supplier')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Get()
  async getAllSupplier(): Promise<Supplier[]> {
    return await this.supplierService.getAllSupplier().catch((error) => {
      throw new HttpException(
        `Failed to get business partners - ${error.message}`,
        500,
      );
    });
  }
}
