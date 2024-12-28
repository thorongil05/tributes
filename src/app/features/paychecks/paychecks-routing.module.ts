import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaychecksHomeComponent } from './paychecks-home/paychecks-home.component';

const routes: Routes = [
  {
    path: 'paychecks',
    component: PaychecksHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaychecksRoutingModule {}
