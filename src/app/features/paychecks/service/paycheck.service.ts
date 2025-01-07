import { Injectable } from '@angular/core';
import { PaycheckEntry, PaycheckPeriod } from '../model/paycheck';

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
          code: '1000',
          description: 'Retribuzione/Stipendio',
          unityValue: 88.76,
          frequency: 16,
          amount: 1420.12,
        },
        {
          code: '6548',
          description: 'CTR C/DIP ESONERO L.197/22',
          unityValue: 14.2,
          frequency: 3,
          amount: 42.6,
        },
        {
          code: '8146',
          description: 'CREDITO D.L.3/20 TOT DETR. TEO',
          unityValue: 1961.53,
          frequency: 1,
        },
        {
          code: '9488',
          description: 'ARROTONDAMENTO NETTO',
          amount: 0.26,
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
