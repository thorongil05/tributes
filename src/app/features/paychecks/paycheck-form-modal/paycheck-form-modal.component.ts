import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OtherCompensation, OtherEntry, SalaryEntry } from '../model/paycheck';

@Component({
  selector: 'app-paycheck-form-modal',
  templateUrl: './paycheck-form-modal.component.html',
  styleUrl: './paycheck-form-modal.component.scss',
})
export class PaycheckFormModalComponent {
  private _salaryEntry: SalaryEntry = {
    unitValue: 0,
    frequency: 0,
    amount: 0,
  };
  private readonly _otherEntries: OtherEntry[] = [];
  private _otherCompensations: OtherCompensation[] = [];

  public get salaryEntry(): SalaryEntry {
    return this._salaryEntry;
  }
  public set salaryEntry(value: SalaryEntry) {
    this._salaryEntry = value;
  }

  public get otherEntries(): OtherEntry[] {
    return this._otherEntries;
  }

  public get otherCompensations(): OtherCompensation[] {
    return this._otherCompensations;
  }

  public set otherCompensations(v: OtherCompensation[]) {
    this._otherCompensations = v;
  }

  public get salary(): number {
    return this.salaryEntry.amount;
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

  public get otherCompensationsAmount(): number {
    return this.otherCompensations
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

  public get withholdingsAmount(): number {
    return this.incomeTaxWithholding + this.socialContributionWithholding;
  }

  public get amountWithoutWithholdings(): number {
    return (
      this.salary + this.otherCompensationsAmount - this.withholdingsAmount
    );
  }

  public get netRounding(): number {
    return (
      this.amountWithoutWithholdings -
      Math.floor(this.amountWithoutWithholdings)
    );
  }

  public get netRoundingTooltip(): string {
    return `${this.amountWithoutWithholdings} - ${Math.floor(this.amountWithoutWithholdings)}`;
  }

  public get netAmount(): number {
    return this.amountWithoutWithholdings - this.netRounding;
  }

  formGroup: FormGroup = new FormGroup({
    socialContributionRateFormControl: new FormControl<number>(0.0949),
    incomeTaxRateFormControl: new FormControl<number>(0.1357),
  });

  public onOtherCompensationListChanged(
    otherCompensations: OtherCompensation[],
  ) {
    this.otherCompensations = otherCompensations;
  }

  public onSalaryEntryChanged(salaryEntry: SalaryEntry) {
    this.salaryEntry = salaryEntry;
  }

  public onUpdate() {
    // update all the fields that are interested in generic events
  }
}
