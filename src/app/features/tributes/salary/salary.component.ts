import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent implements OnInit {
  private _grossSalary: number = 30284;
  private _incomeTaxationRate: number = 0.28;
  private _socialSecurityRateList: number[] = [0.33, 0.38, 0.377, 0.4082];
  private _socialSecurityContributionsRate: number =
    this._socialSecurityRateList[0];

  salaryFormGroup = new FormGroup({
    grossSalaryFormControl: new FormControl<number>(this._grossSalary),
    socialSecurityContributionsRateFormControl: new FormControl(''),
    incomeTaxationRateFormControl: new FormControl<number>(
      this._incomeTaxationRate * 100
    ),
  });

  ngOnInit(): void {}

  public get grossSalary(): number {
    return this._grossSalary;
  }

  public get socialSecurityContributionsRate(): number {
    return this._socialSecurityContributionsRate;
  }

  public get socialSecurityContributionsPercentage(): number {
    return this._socialSecurityContributionsRate * 100;
  }

  public get socialSecurityRateList(): number[] {
    return this._socialSecurityRateList;
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

  public get incomeBeforeTaxation(): number {
    return this.grossSalary - this.socialSecurityContributions;
  }

  public get socialSecurityContributions(): number {
    return this._grossSalary * this._socialSecurityContributionsRate;
  }

  onGrossSalaryChange() {
    let grossSalaryFromController = this.salaryFormGroup.get(
      'grossSalaryFormControl'
    )?.value;
    if (grossSalaryFromController) {
      this._grossSalary = grossSalaryFromController;
    }
  }

  onSocialSecurityContributionsRateChange() {
    let socialSecurityContributionsRate = this.salaryFormGroup.get(
      'socialSecurityContributionsRateFormControl'
    )?.value;
    if (socialSecurityContributionsRate) {
      this._socialSecurityContributionsRate = Number.parseFloat(
        socialSecurityContributionsRate
      );
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

  formatLabel(value: number) {
    return `${value}%`;
  }

  onSubmit() {}
}
