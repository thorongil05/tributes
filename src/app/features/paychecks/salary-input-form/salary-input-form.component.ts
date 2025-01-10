import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalaryEntry } from '../model/paycheck';

@Component({
  selector: 'app-salary-input-form',
  templateUrl: './salary-input-form.component.html',
  styleUrl: './salary-input-form.component.scss',
})
export class SalaryInputFormComponent {
  private _salaryEntry: SalaryEntry = {
    frequency: 16.0,
    unitValue: 88.76,
    amount: 16.0 * 88.76,
  };

  public get salaryEntry(): SalaryEntry {
    return this._salaryEntry;
  }
  public set salaryEntry(value: SalaryEntry) {
    this._salaryEntry = value;
  }

  @Output() salaryEntryChangeEvent: EventEmitter<SalaryEntry> =
    new EventEmitter();

  formGroup: FormGroup = new FormGroup({
    salaryUnityValueFormControl: new FormControl<number>(
      this.salaryEntry.unitValue,
    ),
    salaryFrequencyFormControl: new FormControl<number>(
      this.salaryEntry.frequency,
    ),
  });

  public onFormValueChanged() {
    let salaryUnityValue: number = this.formGroup.get(
      'salaryUnityValueFormControl',
    )?.value;
    let salaryFrequency: number = this.formGroup.get(
      'salaryFrequencyFormControl',
    )?.value;
    let amount = salaryFrequency * salaryUnityValue;
    this.salaryEntry = {
      amount: amount,
      frequency: salaryFrequency,
      unitValue: salaryUnityValue,
    };
    this.salaryEntryChangeEvent.emit(this.salaryEntry);
  }
}
