import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InvestmentsModule } from './investments/investments.module';
import { FeaturesModule } from './features/features.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';

@NgModule({
  declarations: [AppComponent, HomeComponent, SideBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvestmentsModule,
    FeaturesModule,
    NgxGraphModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
