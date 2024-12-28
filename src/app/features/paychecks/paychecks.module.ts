import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaychecksRoutingModule } from './paychecks-routing.module';
import { PaychecksHomeComponent } from './paychecks-home/paychecks-home.component';
import { PaycheckTableComponent } from './paycheck-table/paycheck-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PaychecksHomeComponent, PaycheckTableComponent],
  imports: [CommonModule, PaychecksRoutingModule, MatTableModule],
})
export class PaychecksModule {}
