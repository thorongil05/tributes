import { Injectable } from '@angular/core';
import { BondType } from '../model/bond-type';
import { Bond } from '../model/bond';
import { BondConstants } from '../model/bond-constants';
import { RemainingPeriod } from '../model/investments';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  getBondTypes() {
    return [BondType.BOT, BondType.BTP];
  }

  extractBondDataFromName(name: string, type: BondType): Bond {
    if (type == BondType.BTP) {
      let regex = RegExp(BondConstants.FINECO_NAME_PATTERN);
      if (regex.test(name)) {
        let groupList = regex.exec(name);
        if (groupList == null)
          throw new Error('If test is ok, group list cannot be null');
        let month = this.extractMonthNumberFromString(groupList[3]);
        let year = Number.parseInt('20' + groupList[4]);
        let dayOfTheMonth = Number.parseInt(groupList[2]);
        let expirationDate = new Date();
        expirationDate.setFullYear(year, month, dayOfTheMonth);
        let annualCoupon = Number.parseFloat(groupList[5]);
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
      case 'LG':
        return 6;
      default:
        return 0; // TODO: refine
    }
  }

  private extractRemainingPeriod(date: Date): RemainingPeriod {
    let startDate = new Date();

    console.log(startDate);
    console.log(date);

    let years = date.getFullYear() - startDate.getFullYear();
    let months = date.getMonth() - startDate.getMonth();
    let days = date.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      const previousMonth = new Date(date.getFullYear(), date.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return {
      years: years,
      months: months,
      days: days,
    };
  }
}
