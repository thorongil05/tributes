import { Pipe, PipeTransform } from '@angular/core';
import { SocialSecurityContributionModel } from '../model/tributes-model';
@Pipe({
  name: 'socialSecurityContributionModel',
  standalone: true,
})
export class SocialSecurityContributionModelPipe implements PipeTransform {
  transform(value: SocialSecurityContributionModel): string {
    if (value == SocialSecurityContributionModel.IVS) {
      return 'IVS';
    }
    if (value == SocialSecurityContributionModel.FONDO_VOLO) {
      return 'Fondo Volo';
    }
    if (
      value ==
      SocialSecurityContributionModel.FONDO_PENSIONI_LAVORATORI_SPETTACOLO
    ) {
      return 'Fondo Pensionistico Lavoratori dello Spettacolo';
    }
    if (value == SocialSecurityContributionModel.IPOST) {
      return 'IPOST';
    }
    return 'NOT MAPPED';
  }
}
