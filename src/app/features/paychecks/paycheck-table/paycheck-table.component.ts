import { Component } from '@angular/core';
import { PaycheckEntry } from '../model/paycheck';

@Component({
  selector: 'app-paycheck-table',
  templateUrl: './paycheck-table.component.html',
  styleUrl: './paycheck-table.component.scss',
})
export class PaycheckTableComponent {
  private _displayableColumns: string[] = [
    'code',
    'description',
    'withholdings',
    'amount',
  ];
  private _paycheckEntryList: PaycheckEntry[] = [
    {
      code: '1000',
      description: 'Retribuzione/Stipendio',
      amount: 2461.53,
    },
  ];

  public get displayableColumns(): string[] {
    return this._displayableColumns;
  }
  public set displayableColumns(value: string[]) {
    this._displayableColumns = value;
  }

  public get paycheckEntryList(): PaycheckEntry[] {
    return this._paycheckEntryList;
  }

  public set paycheckEntryList(value: PaycheckEntry[]) {
    this._paycheckEntryList = value;
  }
}
