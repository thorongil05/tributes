import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaychecksRoutingModule } from './paychecks-routing.module';
import { PaychecksHomeComponent } from './paychecks-home/paychecks-home.component';
import { PaycheckTableComponent } from './paycheck-table/paycheck-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButton } from '@angular/material/button';
import { SinglePaycheckHorizontalMenuComponent } from './single-paycheck-horizontal-menu/single-paycheck-horizontal-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PaycheckHorizontalMenuComponent } from './paycheck-horizontal-menu/paycheck-horizontal-menu.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaychecksHomeComponent,
    PaycheckTableComponent,
    SinglePaycheckHorizontalMenuComponent,
    PaycheckHorizontalMenuComponent,
  ],
  imports: [
    CommonModule,
    PaychecksRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatButton,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class PaychecksModule {}
