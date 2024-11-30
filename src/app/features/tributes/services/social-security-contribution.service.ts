import { Injectable } from '@angular/core';
import {
  SocialSecurityContribution,
  SocialSecurityContributionModel,
} from '../model/tributes-model';

@Injectable({
  providedIn: 'root',
})
export class SocialSecurityContributionService {
  private _socialSecurityContributionList: SocialSecurityContribution[] = [
    {
      model: SocialSecurityContributionModel.IVS,
      employeeContributionOnGrossSalaryRate: 23.81,
      employerContributionOnGrossSalaryRate: 9.19,
    },
    {
      model: SocialSecurityContributionModel.IPOST,
      employeeContributionOnGrossSalaryRate: 23.81,
      employerContributionOnGrossSalaryRate: 9.19,
    },
    {
      model: SocialSecurityContributionModel.FONDO_VOLO,
      employeeContributionOnGrossSalaryRate: 23.81,
      employerContributionOnGrossSalaryRate: 9.19,
    },
    {
      model:
        SocialSecurityContributionModel.FONDO_PENSIONI_LAVORATORI_SPETTACOLO,
      employeeContributionOnGrossSalaryRate: 23.81,
      employerContributionOnGrossSalaryRate: 9.19,
    },
  ];

  constructor() {}

  public get socialSecurityContributionList(): SocialSecurityContribution[] {
    return this._socialSecurityContributionList;
  }
  public set socialSecurityContributionList(
    value: SocialSecurityContribution[]
  ) {
    this._socialSecurityContributionList = value;
  }
}
