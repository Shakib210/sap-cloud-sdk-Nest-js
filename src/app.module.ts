import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnersController } from './business-partners/business-partners.controller';
import { BusinessPartnersService } from './business-partners/business-partners.service';
import { CustomerSalesAreaController } from './customer-sales-area/customer-sales-area.controller';
import { CustomerSalesAreaService } from './customer-sales-area/customer-sales-area.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BusinessPartnersController,
    CustomerSalesAreaController,
    CustomerController,
  ],
  providers: [
    AppService,
    BusinessPartnersService,
    CustomerSalesAreaService,
    CustomerService,
  ],
})
export class AppModule {}
