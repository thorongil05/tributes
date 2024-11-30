import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SocialSecurityContributionService } from '../services/social-security-contribution.service';
import {
  SocialSecurityContribution,
  SocialSecurityContributionModel,
} from '../model/tributes-model';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent implements OnInit {
  private _grossSalary: number = 30284;
  private _incomeTaxationRate: number = 0.28;
  private _socialSecurityRateList: SocialSecurityContribution[] = [
    {
      employeeContributionOnGrossSalaryRate: 21,
      employerContributionOnGrossSalaryRate: 9,
      model: SocialSecurityContributionModel.IVS,
    },
  ];
  private _socialSecurityContributionsSelected: SocialSecurityContribution =
    this._socialSecurityRateList[0];
  private _installmentNumberPerYear: number = 13;

  constructor(
    private readonly socialSecurityContributionService: SocialSecurityContributionService
  ) {}

  salaryFormGroup = new FormGroup({
    grossSalaryFormControl: new FormControl<number>(this._grossSalary),
    socialSecurityContributionsRateFormControl:
      new FormControl<SocialSecurityContribution>(
        this.socialSecurityContributionsSelected
      ),
    incomeTaxationRateFormControl: new FormControl<number>(
      this._incomeTaxationRate * 100
    ),
    installmentNumberPerYearFormControl: new FormControl<number>(
      this._installmentNumberPerYear
    ),
  });

  ngOnInit(): void {
    this._socialSecurityRateList =
      this.socialSecurityContributionService.socialSecurityContributionList;
  }

  public get socialSecurityContributionsSelected(): SocialSecurityContribution {
    return this._socialSecurityContributionsSelected;
  }

  public set socialSecurityContributionsSelected(
    value: SocialSecurityContribution
  ) {
    this._socialSecurityContributionsSelected = value;
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

  public get socialSecurityRateList(): SocialSecurityContribution[] {
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

  public get socialSecurityContributions(): number {
    return (
      this._socialSecurityContributionsSelected
        .employeeContributionOnGrossSalaryRate * this.grossSalary
    );
  }

  public get incomeBeforeTaxation(): number {
    return (
      this.grossSalary -
      this.socialSecurityContributionsSelected
        .employeeContributionOnGrossSalaryRate
    );
  }

  onGrossSalaryChange() {
    let grossSalaryFromController = this.salaryFormGroup.get(
      'grossSalaryFormControl'
    )?.value;
    if (grossSalaryFromController) {
      this._grossSalary = grossSalaryFromController;
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
