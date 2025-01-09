import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaychecksRoutingModule } from './paychecks-routing.module';
import { PaychecksHomeComponent } from './paychecks-home/paychecks-home.component';
import { PaycheckTableComponent } from './paycheck-table/paycheck-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { SinglePaycheckHorizontalMenuComponent } from './single-paycheck-horizontal-menu/single-paycheck-horizontal-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { PaycheckHorizontalMenuComponent } from './paycheck-horizontal-menu/paycheck-horizontal-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { PaycheckFormModalComponent } from './paycheck-form-modal/paycheck-form-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { OtherCompensationsFormSectionComponent } from './other-compensations-form-section/other-compensations-form-section.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    PaychecksHomeComponent,
    PaycheckTableComponent,
    SinglePaycheckHorizontalMenuComponent,
    PaycheckHorizontalMenuComponent,
    PaycheckFormModalComponent,
    OtherCompensationsFormSectionComponent,
  ],
  imports: [
    CommonModule,
    PaychecksRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    MatTooltipModule,
  ],
})
export class PaychecksModule {}
