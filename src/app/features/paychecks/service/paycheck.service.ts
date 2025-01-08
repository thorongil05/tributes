import { Injectable } from '@angular/core';
import { Paycheck, PaycheckEntry, PaycheckPeriod } from '../model/paycheck';

@Injectable({
  providedIn: 'root',
})
export class PaycheckService {
  private readonly _paychecks: Paycheck[] = [];

  constructor() {
    console.log('Paychecks at startup: ' + this._paychecks.length);
  }

  public fetchPaychecks(): Paycheck[] {
    return this._paychecks;
  }

  public addPaycheck(paycheck: Paycheck) {
    let samePeriodPaychecks = this._paychecks.filter(
      (value) => value.period == paycheck.period,
    );
    if (samePeriodPaychecks.length == 0) {
      this._paychecks.push(paycheck);
    } else if (samePeriodPaychecks.length == 1) {
      samePeriodPaychecks[0].entries = paycheck.entries;
    } else {
      throw new Error('Add paycheck failed: the paycheck list is corrupted');
    }
  }

  public addPaycheckList(paycheckList: Paycheck[]) {
    if (paycheckList.length == 0) return;
    paycheckList.forEach((value) => this.addPaycheck(value));
  }

  public fetchPaychecksByPeriod(period: PaycheckPeriod): PaycheckEntry[] {
    if (period.month == 0 || period.year == 0) return [];
    return this._paychecks
      .filter((value) => value.period == period)
      .flatMap((value) => value.entries);
  }

  public fetchPaychecksTotalAmount(period: PaycheckPeriod) {
    let entries = this.fetchPaychecksByPeriod(period);
    return entries
      .map((entry) => (entry.amount ? entry.amount : 0))
      .reduce((sum, current) => sum + current, 0);
  }

  public fetchPaychecksTotalWithHolding(period: PaycheckPeriod) {
    let entries = this.fetchPaychecksByPeriod(period);
    return entries
      .map((entry) => (entry.withholdings ? entry.withholdings : 0))
      .reduce((sum, current) => sum + current, 0);
  }

  public fetchNetAmountByPeriod(period: PaycheckPeriod): number {
    return (
      this.fetchPaychecksTotalAmount(period) -
      this.fetchPaychecksTotalWithHolding(period)
    );
  }

  public fetchPeriods(year: number): PaycheckPeriod[] {
    return this._paychecks
      .filter((value) => value.period.year == year)
      .map((value) => value.period);
  }

  public fetchYears(): number[] {
    let years = this._paychecks.map((value) => value.period.year);
    return [...new Set(years)];
  }
}
