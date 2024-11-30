import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  @Input() grossSalary: number = 0;
  @Input() socialSecurityEmployeeContributionsAmount: number = 0;
  @Input() socialSecurityEmployeeContributionsRate: number = 0;
  @Input() incomeBeforeTaxationAmount: number = 0;
  @Input() incomeTaxationAmount: number = 0;
  @Input() incomeTaxationRate: number = 0;
  @Input() incomeAfterTaxationAmount: number = 0;
  @Input() netPeriodicSalaryAmount: number = 0;
}
