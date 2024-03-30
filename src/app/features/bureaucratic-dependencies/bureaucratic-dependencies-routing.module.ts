import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyTreeComponent } from './dependency-tree/dependency-tree.component';

const routes: Routes = [
  { path: 'bureaucratic-dependencies/:id', component: DependencyTreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BureaucraticDependenciesRoutingModule {}
