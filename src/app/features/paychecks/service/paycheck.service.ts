import { Injectable } from '@angular/core';
import {
  PaycheckEntry,
  PaycheckPeriod,
  PaycheckWithholding,
} from '../model/paycheck';

@Injectable({
  providedIn: 'root',
})
export class PaycheckService {
  constructor() {}

  public fetchPaychecksByPeriod(period: PaycheckPeriod): PaycheckEntry[] {
    if (period.month == 0 || period.year == 0) return [];
    if (period.month == 3 && period.year == 2023)
      return [
        {
          description: '1000 - Retribuzione/Stipendio',
          unityValue: 88.76,
          frequency: 16,
          amount: 1420.12,
        },
        {
          description: '6548 - CTR C/DIP ESONERO L.197/22',
          unityValue: 14.2,
          frequency: 3,
          amount: 42.6,
        },
        {
          description: '8146 - CREDITO D.L.3/20 TOT DETR. TEO',
          unityValue: 1961.53,
          frequency: 1,
        },
        {
          description: '9488 - ARROTONDAMENTO NETTO',
          amount: 0.26,
        },
        {
          description: 'Sociale - INPS',
          taxableAmount: 1420,
          withholdings: 134.76,
        },
      ];
    return [];
  }

  public fetchPaychecksTotalAmount(period: PaycheckPeriod) {
    let entries = this.fetchPaychecksByPeriod(period);
    return entries
      .map((entry) => (entry.amount ? entry.amount : 0))
      .reduce((sum, current) => sum + current, 0);
  }

  public fetchPaychecksTotalWithHolding(period: PaycheckPeriod) {
    let entries = this.fetchPaychecksWithHoldingByPeriod(period);
    return entries
      .map((entry) => entry.withHoldingAmount)
      .reduce((sum, current) => sum + current, 0);
  }

  public fetchPaychecksWithHoldingByPeriod(
    period: PaycheckPeriod,
  ): PaycheckWithholding[] {
    if (period.month == 0 || period.year == 0) return [];
    if (period.month == 3 && period.year == 2023)
      return [
        {
          type: 'Sociale',
          taxableAmount: 1420,
          withHoldingAmount: 134.76,
        },
        {
          type: 'Fiscale',
          taxableAmount: 1327.97,
          withHoldingAmount: 180.22,
        },
      ];
    return [];
  }

  public fetchNetAmountByPeriod(period: PaycheckPeriod): number {
    return (
      this.fetchPaychecksTotalAmount(period) -
      this.fetchPaychecksTotalWithHolding(period)
    );
  }

  public fetchPeriods(): PaycheckPeriod[] {
    return [
      { month: 3, year: 2023 },
      { month: 4, year: 2023 },
      { month: 5, year: 2023 },
      { month: 6, year: 2023 },
      { month: 7, year: 2023 },
      { month: 8, year: 2023 },
      { month: 9, year: 2023 },
      { month: 10, year: 2023 },
      { month: 11, year: 2023 },
      { month: 12, year: 2023 },
    ];
  }
}
