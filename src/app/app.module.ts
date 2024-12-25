import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { InvestmentsModule } from './investments/investments.module';
import { FeaturesModule } from './features/features.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import localeIt from '@angular/common/locales/it';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeIt);
registerLocaleData(localeEn);

const browserLang = navigator.language;

console.log(browserLang);

@NgModule({
  declarations: [AppComponent, SideBarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InvestmentsModule,
    FeaturesModule,
    NgxGraphModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'en-US' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
