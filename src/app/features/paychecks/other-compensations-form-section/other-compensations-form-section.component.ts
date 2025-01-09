import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OtherCompensation } from '../model/paycheck';

@Component({
  selector: 'app-other-compensations-form-section',
  templateUrl: './other-compensations-form-section.component.html',
  styleUrl: './other-compensations-form-section.component.scss',
})
export class OtherCompensationsFormSectionComponent {
  private readonly _otherCompensations: OtherCompensation[] = [];

  @Output() otherCompensationListChangedEvent = new EventEmitter<
    OtherCompensation[]
  >();

  public get otherCompensations(): OtherCompensation[] {
    return this._otherCompensations;
  }

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
    let frequency = value.frequencyFormControl ? value.frequencyFormControl : 0;
    let unitValue = value.unitValueFormControl ? value.unitValueFormControl : 0;
    this.otherCompensations.push({
      description: value.descriptionFormControl
        ? value.descriptionFormControl
        : '',
      frequency: frequency,
      unitValue: unitValue,
      isConsideredInIncomeTaxation: value.isUsedInIncomeTaxFormControl
        ? value.isUsedInIncomeTaxFormControl
        : false,
      isConsideredInSocialContribution:
        value.isUsedInSocialContributionFormControl
          ? value.isUsedInSocialContributionFormControl
          : false,
      amount: frequency * unitValue,
    });
    this.otherCompensationListChangedEvent.emit(this.otherCompensations);
  }
}
