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

export enum IncomeTaxStrategyType {
  TAX_BRACKETS_ITALY_2024,
  CUSTOM,
  UNDEF,
}

export interface IncomeTaxStrategy {
  type: IncomeTaxStrategyType;
  name: string;
}

export interface Bracket {
  rate: number;
  lowerBoundary: number;
  upperBoundary?: number;
}

export interface BracketAppliedToTaxableIncome {
  bracket: Bracket;
  taxAmount?: number;
}
