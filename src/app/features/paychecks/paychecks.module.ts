import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaychecksRoutingModule } from './paychecks-routing.module';
import { PaychecksHomeComponent } from './paychecks-home/paychecks-home.component';
import { PaycheckTableComponent } from './paycheck-table/paycheck-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButton } from '@angular/material/button';
import { PaychecksWithholdingsComponent } from './paychecks-withholdings/paychecks-withholdings.component';

@NgModule({
  declarations: [
    PaychecksHomeComponent,
    PaycheckTableComponent,
    PaychecksWithholdingsComponent,
  ],
  imports: [
    CommonModule,
    PaychecksRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatButton,
  ],
})
export class PaychecksModule {}
