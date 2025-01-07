import { Component, Input } from '@angular/core';
import { PaycheckEntry } from '../model/paycheck';
import { PaycheckService } from '../service/paycheck.service';

@Component({
  selector: 'app-paycheck-table',
  templateUrl: './paycheck-table.component.html',
  styleUrl: './paycheck-table.component.scss',
})
export class PaycheckTableComponent {
  @Input() referenceMonth: number = 0;
  @Input() referenceYear: number = 0;

  private _displayableColumns: string[] = [
    'code',
    'description',
    'unityValue',
    'frequency',
    'amount',
  ];

  constructor(private readonly paycheckService: PaycheckService) {}

  public get displayableColumns(): string[] {
    return this._displayableColumns;
  }
  public set displayableColumns(value: string[]) {
    this._displayableColumns = value;
  }

  public get paycheckEntryList(): PaycheckEntry[] {
    return this.paycheckService.fetchPaychecksByMonthYear(
      this.referenceMonth,
      this.referenceYear,
    );
  }

  public get totalAmount(): number {
    return this.paycheckService.fetchPaychecksTotalAmount(
      this.referenceMonth,
      this.referenceYear,
    );
  }
}
