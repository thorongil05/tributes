import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent {
  private incomeBeforeTaxation: number | undefined;
  private grossSalary: number | undefined;
  private socialSecurityContributions: number | undefined;
  private incomeAfterTaxation: number | undefined;
  private incomeTaxation: number | undefined;
  private incomeTaxationRate: number | undefined;
  private socialSecurityContributionsRate: number | undefined;

  salaryFormGroup = new FormGroup({
    grossSalaryFormControl: new FormControl(''),
    socialSecurityContributionsFormControl: new FormControl(''),
    incomeTaxationRateFormControl: new FormControl(''),
  });

  getIncomeBeforeTaxation() {
    return this.incomeBeforeTaxation;
  }

  getGrossSalary() {
    return this.grossSalary;
  }

  getSocialSecurityContributions() {
    return this.socialSecurityContributions;
  }

  getIncomeAfterTaxation() {
    return this.incomeAfterTaxation;
  }

  getIncomeTaxation() {
    return this.incomeTaxation;
  }

  getSocialSecurityContributionsRate() {
    if (this.socialSecurityContributionsRate) {
      return this.socialSecurityContributionsRate / 100;
    }
    return 0;
  }

  getIncomeTaxationRate() {
    if (this.incomeTaxationRate) {
      return this.incomeTaxationRate / 100;
    }
    return 0;
  }

  onGrossSalaryChange() {
    let grossSalary = this.salaryFormGroup.get('grossSalaryFormControl')?.value;
    if (grossSalary) {
      this.grossSalary = Number.parseFloat(grossSalary);
      this.onChange();
    }
  }

  onChange() {
    if (this.grossSalary) {
      this.socialSecurityContributions =
        this.grossSalary * this.getSocialSecurityContributionsRate();
      this.incomeBeforeTaxation =
        this.grossSalary - this.socialSecurityContributions;
      this.incomeTaxation =
        this.incomeBeforeTaxation * this.getIncomeTaxationRate();
      this.incomeAfterTaxation =
        this.incomeBeforeTaxation - this.incomeTaxation;
    }
  }

  onSocialSecurityContributionsSliderChange() {
    let socialSecurityContributionsRate = this.salaryFormGroup.get(
      'socialSecurityContributionsFormControl'
    )?.value;
    if (socialSecurityContributionsRate) {
      this.socialSecurityContributionsRate = Number.parseFloat(
        socialSecurityContributionsRate
      );
      this.onChange();
    }
  }

  onIncomeTaxationSliderChange() {
    let incomeTaxationRate = this.salaryFormGroup.get(
      'incomeTaxationRateFormControl'
    )?.value;
    if (incomeTaxationRate) {
      this.incomeTaxationRate = Number.parseFloat(incomeTaxationRate);
      this.onChange();
    }
  }

  onSubmit() {}
}
