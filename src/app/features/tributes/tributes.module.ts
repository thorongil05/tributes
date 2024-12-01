import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryComponent } from './salary/salary.component';
import { TributesRoutingModule } from './tributes-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { SocialSecurityContributionModelPipe } from './pipes/social-security-contribution-model-pipe';
import { SummaryComponent } from './summary/summary.component';
import { MatSelectModule } from '@angular/material/select';
import { BracketsDetailComponent } from './brackets-detail/brackets-detail.component';

@NgModule({
  declarations: [SalaryComponent, SummaryComponent, BracketsDetailComponent],
  imports: [
    CommonModule,
    TributesRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    SocialSecurityContributionModelPipe,
  ],
})
export class TributesModule {}
