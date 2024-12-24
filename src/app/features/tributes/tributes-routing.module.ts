import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryComponent } from './salary/salary.component';
import { IncomeTaxSimulatorComponent } from './income-tax-simulator/income-tax-simulator.component';

const routes: Routes = [
  {
    path: 'salary',
    component: SalaryComponent,
  },
  {
    path: 'income-tax-simulator',
    component: IncomeTaxSimulatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TributesRoutingModule {}
