import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtherCompensation } from '../model/paycheck';

@Component({
  selector: 'app-paycheck-form-modal',
  templateUrl: './paycheck-form-modal.component.html',
  styleUrl: './paycheck-form-modal.component.scss',
})
export class PaycheckFormModalComponent {
  private _otherCompensations: OtherCompensation[] = [];

  public get otherCompensations(): OtherCompensation[] {
    return this._otherCompensations;
  }

  public set otherCompensations(v: OtherCompensation[]) {
    this._otherCompensations = v;
  }

  public get salary(): number {
    let salaryUnityValue: number = this.formGroup.get(
      'salaryUnityValueFormControl',
    )?.value;
    let salaryFrequency: number = this.formGroup.get(
      'salaryFrequencyFormControl',
    )?.value;
    return salaryFrequency * salaryUnityValue;
  }

  public get roundedSalary(): number {
    return Number(this.salary.toFixed(0));
  }

  public get socialContributionRate(): number {
    return this.formGroup.get('socialContributionRateFormControl')?.value;
  }

  public get socialContributionWithholding(): number {
    return this.socialContributionRate * this.roundedSalary;
  }

  public get incomeTaxRate(): number {
    return this.formGroup.get('incomeTaxRateFormControl')?.value;
  }

  public get otherCompensationsConsideredInIncomeTax(): number {
    return this.otherCompensations
      .filter((value) => value.isConsideredInIncomeTaxation)
      .map((value) => value.amount)
      .reduce((sum, value) => sum + value, 0);
  }

  public get otherCompensationsConsideredInSocialContributionAmount(): number {
    return this.otherCompensations
      .filter((value) => value.isConsideredInSocialContribution)
      .map((value) => value.amount)
      .reduce((sum, value) => sum + value, 0);
  }

  public get incomeTaxableAmount(): number {
    return (
      this.salary +
      this.otherCompensationsConsideredInIncomeTax -
      this.socialContributionWithholding
    );
  }

  public get incomeTaxableAmountTooltip(): string {
    return `${this.salary} + ${this.otherCompensationsConsideredInIncomeTax} - ${this.socialContributionWithholding}`;
  }

  public get socialContributionTaxableAmount(): number {
    return (
      this.salary + this.otherCompensationsConsideredInSocialContributionAmount
    );
  }

  public get socialContributionTaxableAmountTooltip(): string {
    return `${this.salary} + ${this.otherCompensationsConsideredInIncomeTax}`;
  }

  public get incomeTaxWithholding(): number {
    return this.incomeTaxableAmount * this.incomeTaxRate;
  }

  formGroup: FormGroup = new FormGroup({
    salaryUnityValueFormControl: new FormControl<number>(88.76),
    salaryFrequencyFormControl: new FormControl<number>(16.0),
    socialContributionRateFormControl: new FormControl<number>(0.0949),
    incomeTaxRateFormControl: new FormControl<number>(0.1357),
  });

  public onOtherCompensationListChanged(
    otherCompensations: OtherCompensation[],
  ) {
    this.otherCompensations = otherCompensations;
  }
}
