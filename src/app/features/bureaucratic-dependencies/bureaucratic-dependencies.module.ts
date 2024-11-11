import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BureaucraticDependenciesRoutingModule } from './bureaucratic-dependencies-routing.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { DependencyGraphComponent } from './dependency-graph/dependency-graph.component';

@NgModule({
  declarations: [DependencyGraphComponent],
  imports: [
    CommonModule,
    BureaucraticDependenciesRoutingModule,
    NgxGraphModule,
  ],
})
export class BureaucraticDependenciesModule {}
