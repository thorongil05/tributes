import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BureaucraticDependenciesModule } from './bureaucratic-dependencies/bureaucratic-dependencies.module';
import { TributesModule } from './tributes/tributes.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule],
  exports: [BureaucraticDependenciesModule, TributesModule],
})
export class FeaturesModule {}
