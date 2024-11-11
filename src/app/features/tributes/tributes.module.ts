import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { TributesRoutingModule } from './tributes-routing.module';

@NgModule({
  declarations: [SalaryComponent],
  imports: [CommonModule, TributesRoutingModule],
})
export class TributesModule {}
