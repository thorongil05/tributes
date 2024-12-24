import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  IncomeTaxStrategy,
  IncomeTaxStrategyType,
} from '../model/tributes-model';
import { TaxInfo } from '../model/TaxInfo';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent {
  private _grossSalary: number = 30284;
  private _installmentNumberPerYear: number = 13;
  private _incomeTax: TaxInfo = new TaxInfo(0, 0.28);
  private _socialSecurityEmployeeContributionRate: number = 0.0919;
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
      this.incomeTaxStrategyList[0],
    ),
    socialSecurityContributionsRateFormControl: new FormControl<number>(
      this._socialSecurityEmployeeContributionRate * 100,
    ),
    incomeTaxationRateFormControl: new FormControl<number>(
      this.incomeTax.taxationRate * 100,
    ),
    installmentNumberPerYearFormControl: new FormControl<number>(
      this._installmentNumberPerYear,
    ),
  });

  salaryViewDriverGroup: FormGroup = new FormGroup({
    enableIntraStepsFormControl: new FormControl<boolean>(false),
  });

  public get isIntraStepsEnabled() {
    console.log(
      this.salaryViewDriverGroup.get('enableIntraStepsFormControl')?.value,
    );
    return this.salaryViewDriverGroup.get('enableIntraStepsFormControl')?.value;
  }

  public get incomeTax(): TaxInfo {
    return this._incomeTax;
  }
  public set incomeTax(value: TaxInfo) {
    this._incomeTax = value;
  }

  public get installmentNumberPerYear(): number {
    return this._installmentNumberPerYear;
  }

  public get grossPeriodicSalary(): number {
    return this.grossSalary / this.installmentNumberPerYear;
  }

  public get withholdingPeriodicRate(): number {
    return 1 - this.netPeriodicSalary / this.grossPeriodicSalary;
  }

  public get withholdingPeriodicAmount(): number {
    return this.grossPeriodicSalary - this.netPeriodicSalary;
  }

  public get netPeriodicSalary(): number {
    return this.incomeAfterTaxation / this.installmentNumberPerYear;
  }

  public get grossSalary(): number {
    return this._grossSalary;
  }

  public get incomeAfterTaxation(): number {
    return this.incomeBeforeTaxation - this.incomeTax.taxableAmount;
  }

  public get socialSecurityContributions(): number {
    return this._socialSecurityEmployeeContributionRate * this.grossSalary;
  }

  public get incomeBeforeTaxation(): number {
    return this.grossSalary - this.socialSecurityContributions;
  }

  public get socialSecurityEmployeeContributionRate(): number {
    return this._socialSecurityEmployeeContributionRate;
  }
  public set socialSecurityEmployeeContributionRate(value: number) {
    this._socialSecurityEmployeeContributionRate = value;
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
      'grossSalaryFormControl',
    )?.value;
    if (grossSalaryFromController) {
      this._grossSalary = grossSalaryFromController;
    }
  }

  onSocialSecurityContributionRateChange() {
    let employeeSocialSecurityContributionPercentage = this.salaryFormGroup.get(
      'socialSecurityContributionsRateFormControl',
    )?.value;
    if (employeeSocialSecurityContributionPercentage) {
      this._socialSecurityEmployeeContributionRate =
        employeeSocialSecurityContributionPercentage / 100;
    }
  }

  onIncomeTaxationSliderChange() {
    let incomeTaxationPercentage = this.salaryFormGroup.get(
      'incomeTaxationRateFormControl',
    )?.value;
    if (incomeTaxationPercentage) {
      let taxationRatio = incomeTaxationPercentage / 100;
      this.incomeTax.taxationRate = taxationRatio;
    }
  }

  onIncomeTaxationChange(taxInfo: TaxInfo) {
    this.incomeTax = taxInfo;
  }

  onInstallmentNumberPerYearChange() {
    let installmentNumberPerYearFormValue = this.salaryFormGroup.get(
      'installmentNumberPerYearFormControl',
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
