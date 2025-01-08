import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BondsOverviewComponent } from './bonds-overview/bonds-overview.component';
import { SharesOverviewComponent } from './shares-overview/shares-overview.component';

const routes: Routes = [
  { path: 'bonds', component: BondsOverviewComponent },
  { path: 'shares', component: SharesOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentsRoutingModule {}
