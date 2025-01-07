import { Injectable } from '@angular/core';
import { PaycheckEntry } from '../model/paycheck';

@Injectable({
  providedIn: 'root',
})
export class PaycheckService {
  constructor() {}

  public fetchPaychecksByMonthYear(
    month: number,
    year: number,
  ): PaycheckEntry[] {
    if (month == 0 || year == 0) return [];
    if (month == 3 && year == 2023)
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

  public fetchPaychecksTotalAmount(month: number, year: number) {
    let entries = this.fetchPaychecksByMonthYear(month, year);
    return entries
      .map((entry) => (entry.amount ? entry.amount : 0))
      .reduce((sum, current) => sum + current, 0);
  }
}
