import { Injectable } from '@angular/core';
import { BondType } from '../model/bond-type';
import { Bond } from '../model/bond';
import { BondConstants } from '../model/bond-constants';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  getBondTypes() {
    return [BondType.BOT, BondType.BTP];
  }

  extractBondDataFromName(name: string, type: BondType): Bond {
    if (type == BondType.BTP) {
      if (name.match(BondConstants.FINECO_NAME_PATTERN)) {
        let expirationStr = name.substring(4, 10);
        let month = this.extractMonthNumberFromString(
          expirationStr.substring(2, 4)
        );
        let year = Number.parseInt('20' + expirationStr.substring(4, 6));
        let dayOfTheMonth = Number.parseInt(expirationStr.substring(0, 2));
        let expirationDate = new Date();
        expirationDate.setFullYear(year, month, dayOfTheMonth);
        let annualCoupon = Number.parseFloat(name.split(' ')[1]);
        return {
          fullName: name,
          expirationDate: expirationDate,
          type: BondType.BTP,
          annualCoupon: annualCoupon,
          remainingPeriod: this.extractRemainingPeriod(expirationDate),
        };
      }
    }
    let expirationDate = new Date();
    return {
      fullName: name,
      expirationDate: expirationDate,
      type: BondType.BOT,
      annualCoupon: 0,
      remainingPeriod: this.extractRemainingPeriod(expirationDate),
    };
  }

  private extractMonthNumberFromString(monthAbbr: string) {
    switch (monthAbbr) {
      case 'AG':
        return 7;
      default:
        return 0; // TODO: refine
    }
  }

  private extractRemainingPeriod(date: Date): number {
    return date.getTime() - new Date().getTime();
  }
}
