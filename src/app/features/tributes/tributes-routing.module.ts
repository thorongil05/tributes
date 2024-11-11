import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryComponent } from './salary/salary.component';

const routes: Routes = [
  {
    path: 'salary',
    component: SalaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TributesRoutingModule {}
