export enum SocialSecurityContributionModel {
  IVS,
  IPOST,
  FONDO_VOLO,
  FONDO_PENSIONI_LAVORATORI_SPETTACOLO,
  UNDEF,
}

export interface SocialSecurityContribution {
  model: SocialSecurityContributionModel;
  employeeContributionOnGrossSalaryRate: number;
  employerContributionOnGrossSalaryRate: number;
}
