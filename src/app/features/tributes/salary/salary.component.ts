import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  IncomeTaxStrategy,
  IncomeTaxStrategyType,
} from '../model/tributes-model';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent {
  private _grossSalary: number = 30284;
  private _incomeTaxationRate: number = 0.28;
  private _incomeTaxAmount: number = 0;
  private _installmentNumberPerYear: number = 13;
  private _socialSecurityEmployeeContribution: number = 0.0919;
  private _incomeTaxStrategyList: IncomeTaxStrategy[] = [
    {
      type: IncomeTaxStrategyType.TAX_BRACKETS_ITALY_2024,
      name: 'IRPEF - 2024',
    },
    { type: IncomeTaxStrategyType.CUSTOM, name: 'CUSTOM' },
  ];
  private _selectedIncomeTaxStrategy: IncomeTaxStrategy =
    this._incomeTaxStrategyList[0];

  salaryFormGroup = new FormGroup({
    grossSalaryFormControl: new FormControl<number>(this._grossSalary),
    incomeTaxStrategyFormControl: new FormControl<IncomeTaxStrategy>(
      this.incomeTaxStrategyList[0]
    ),
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

  public get incomeTaxAmount(): number {
    return this._incomeTaxAmount;
  }
  public set incomeTaxAmount(value: number) {
    this._incomeTaxAmount = value;
  }

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
    return this.incomeBeforeTaxation - this.incomeTaxAmount;
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

  public get incomeTaxStrategyList(): IncomeTaxStrategy[] {
    return this._incomeTaxStrategyList;
  }
  public set incomeTaxStrategyList(value: IncomeTaxStrategy[]) {
    this._incomeTaxStrategyList = value;
  }

  public get selectedIncomeTaxStrategy(): IncomeTaxStrategy {
    return this._selectedIncomeTaxStrategy;
  }
  public set selectedIncomeTaxStrategy(value: IncomeTaxStrategy) {
    this._selectedIncomeTaxStrategy = value;
  }

  isItaly2024Selected() {
    return (
      this.selectedIncomeTaxStrategy.type ==
      IncomeTaxStrategyType.TAX_BRACKETS_ITALY_2024
    );
  }

  isCustomStrategySelected() {
    return this.selectedIncomeTaxStrategy.type == IncomeTaxStrategyType.CUSTOM;
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

  onIncomeTaxationChange(incomeTaxAmountChangedEvent: number) {
    this.incomeTaxAmount = incomeTaxAmountChangedEvent;
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
