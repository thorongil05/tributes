import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';

const routes: Routes = [
  {
    path: 'bureaucratic-dependencies/:id',
    component: DependencyGraphComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BureaucraticDependenciesRoutingModule {}
