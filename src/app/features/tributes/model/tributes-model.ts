enum SocialSecurityContributionModel {
  IVS,
  IPOST,
  FONDO_VOLO,
  FONDO_PENSIONI_LAVORATORI_SPETTACOLO,
}

interface SocialSecurityContribution {
  model: SocialSecurityContributionModel;
  employeeContributionOnGrossSalaryRate: number;
  employerContributionOnGrossSalaryRate: number;
}
