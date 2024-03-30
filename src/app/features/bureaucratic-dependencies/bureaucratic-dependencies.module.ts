import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BureaucraticDependenciesRoutingModule } from './bureaucratic-dependencies-routing.module';
import { DependencyTreeComponent } from './dependency-tree/dependency-tree.component';


@NgModule({
  declarations: [
    DependencyTreeComponent
  ],
  imports: [
    CommonModule,
    BureaucraticDependenciesRoutingModule
  ]
})
export class BureaucraticDependenciesModule { }
