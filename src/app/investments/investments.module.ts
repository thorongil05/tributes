import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { BondForecasterComponent } from './bond-forecaster/bond-forecaster.component';
import { BondsOverviewComponent } from './bonds-overview/bonds-overview.component';
import { SharesOverviewComponent } from './shares-overview/shares-overview.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BondForecasterComponent,
    BondsOverviewComponent,
    SharesOverviewComponent,
  ],
  imports: [CommonModule, InvestmentsRoutingModule, ReactiveFormsModule],
})
export class InvestmentsModule {}
