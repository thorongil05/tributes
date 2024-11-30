import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent {
  private _grossSalary: number = 30284;
  private _incomeTaxationRate: number = 0.28;
  private _installmentNumberPerYear: number = 13;
  private _socialSecurityEmployeeContribution: number = 0.0919;

  salaryFormGroup = new FormGroup({
    grossSalaryFormControl: new FormControl<number>(this._grossSalary),
    socialSecurityContributionsRateFormControl: new FormControl<number>(
      this._socialSecurityEmployeeContribution * 100
    ),
    incomeTaxationRateFormControl: new FormControl<number>(
      this._incomeTaxationRate * 100
    ),
    installmentNumberPerYearFormControl: new FormControl<number>(
      this._installmentNumberPerYear
    ),
  });

  public get installmentNumberPerYear(): number {
    return this._installmentNumberPerYear;
  }

  public get netPeriodicSalary(): number {
    return this.incomeAfterTaxation / this.installmentNumberPerYear;
  }

  public get grossSalary(): number {
    return this._grossSalary;
  }

  public get incomeTaxationRate(): number {
    return this._incomeTaxationRate;
  }

  public get incomeAfterTaxation(): number {
    return this.incomeBeforeTaxation - this.incomeTaxation;
  }

  public get incomeTaxation(): number {
    return this.incomeBeforeTaxation * this.incomeTaxationRate;
  }

  public get socialSecurityContributions(): number {
    return this._socialSecurityEmployeeContribution * this.grossSalary;
  }

  public get incomeBeforeTaxation(): number {
    return this.grossSalary - this._socialSecurityEmployeeContribution;
  }

  public get socialSecurityEmployeeContribution(): number {
    return this._socialSecurityEmployeeContribution;
  }
  public set socialSecurityEmployeeContribution(value: number) {
    this._socialSecurityEmployeeContribution = value;
  }

  onGrossSalaryChange() {
    let grossSalaryFromController = this.salaryFormGroup.get(
      'grossSalaryFormControl'
    )?.value;
    if (grossSalaryFromController) {
      this._grossSalary = grossSalaryFromController;
    }
  }

  onSocialSecurityContributionRateChange() {
    let employeeSocialSecurityContributionRate = this.salaryFormGroup.get(
      'socialSecurityContributionsRateFormControl'
    )?.value;
    if (employeeSocialSecurityContributionRate) {
      this._socialSecurityEmployeeContribution =
        employeeSocialSecurityContributionRate / 100;
    }
  }

  onIncomeTaxationSliderChange() {
    let incomeTaxationPercentage = this.salaryFormGroup.get(
      'incomeTaxationRateFormControl'
    )?.value;
    console.log(incomeTaxationPercentage);
    if (incomeTaxationPercentage) {
      this._incomeTaxationRate = incomeTaxationPercentage / 100;
    }
  }

  onInstallmentNumberPerYearChange() {
    let installmentNumberPerYearFormValue = this.salaryFormGroup.get(
      'installmentNumberPerYearFormControl'
    )?.value;
    if (installmentNumberPerYearFormValue) {
      this._installmentNumberPerYear = installmentNumberPerYearFormValue;
    }
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  onSubmit() {}
}
