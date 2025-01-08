import { Component, Input } from '@angular/core';
import { PaycheckEntry, PaycheckPeriod } from '../model/paycheck';
import { PaycheckService } from '../service/paycheck.service';

@Component({
  selector: 'app-paycheck-table',
  templateUrl: './paycheck-table.component.html',
  styleUrl: './paycheck-table.component.scss',
})
export class PaycheckTableComponent {
  @Input() referencePeriod: PaycheckPeriod = {
    month: 0,
    year: 0,
  };

  constructor(private readonly paycheckService: PaycheckService) {}

  public get displayableColumns(): string[] {
    return [
      'description',
      'unityValue',
      'frequency',
      'taxableAmount',
      'amount',
    ];
  }

  public get displayableColumns2(): string[] {
    return this.displayableColumns.map((x) => `f2_${x}`);
  }

  public get paycheckEntryList(): PaycheckEntry[] {
    return this.paycheckService.fetchPaychecksByPeriod(this.referencePeriod);
  }

  public get totalAmount(): number {
    return this.paycheckService.fetchPaychecksTotalAmount(this.referencePeriod);
  }

  public get withHoldings(): number {
    return this.paycheckService.fetchPaychecksTotalWithHolding(
      this.referencePeriod,
    );
  }

  public get netAmount(): number {
    return this.paycheckService.fetchNetAmountByPeriod(this.referencePeriod);
  }

  public isCompensationRow(index: number, row: PaycheckEntry): boolean {
    if (!row.withholdings) return true;
    return false;
  }

  public isWithholdingRow(index: number, row: PaycheckEntry): boolean {
    if (row.withholdings) return true;
    return false;
  }
}
