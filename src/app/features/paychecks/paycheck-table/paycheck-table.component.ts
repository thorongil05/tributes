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
    return this.paycheckService.fetchPaychecksByPeriod(this.referencePeriod);
  }

  public get totalAmount(): number {
    return this.paycheckService.fetchPaychecksTotalAmount(this.referencePeriod);
  }
}
