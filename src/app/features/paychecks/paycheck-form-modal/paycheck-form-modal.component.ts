import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paycheck-form-modal',
  templateUrl: './paycheck-form-modal.component.html',
  styleUrl: './paycheck-form-modal.component.scss',
})
export class PaycheckFormModalComponent {
  private readonly _otherCompensations: OtherCompensation[] = [];

  public get otherCompensations(): OtherCompensation[] {
    return this._otherCompensations;
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

  public get incomeTaxableAmount(): number {
    return this.salary - this.socialContributionWithholding;
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

  formGroupOtherCompensations = new FormGroup({
    descriptionFormControl: new FormControl<string>('', [Validators.required]),
    frequencyFormControl: new FormControl<number>(0, Validators.required),
    unitValueFormControl: new FormControl<number>(0, Validators.required),
    isUsedInSocialContributionFormControl: new FormControl<boolean>(false),
    isUsedInIncomeTaxFormControl: new FormControl<boolean>(false),
  });

  public addOtherCompensation() {
    if (!this.formGroupOtherCompensations.valid) {
      throw new Error(
        'Cannot add other compensations if the form is not valid',
      );
    }
    let value = this.formGroupOtherCompensations.value;
    this.otherCompensations.push({
      description: value.descriptionFormControl
        ? value.descriptionFormControl
        : '',
      frequency: value.frequencyFormControl ? value.frequencyFormControl : 0,
      unitValue: value.unitValueFormControl ? value.unitValueFormControl : 0,
      isConsideredInIncomeTaxation: value.isUsedInIncomeTaxFormControl
        ? value.isUsedInIncomeTaxFormControl
        : false,
      isConsideredInSocialContribution:
        value.isUsedInSocialContributionFormControl
          ? value.isUsedInSocialContributionFormControl
          : false,
    });
  }
}

interface OtherCompensation {
  description: string;
  frequency: number;
  unitValue: number;
  isConsideredInSocialContribution: boolean;
  isConsideredInIncomeTaxation: boolean;
}
