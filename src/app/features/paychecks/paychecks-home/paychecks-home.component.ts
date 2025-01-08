import { Component, OnInit } from '@angular/core';
import { PaycheckPeriod } from '../model/paycheck';
import { PaycheckService } from '../service/paycheck.service';

@Component({
  selector: 'app-paychecks-home',
  templateUrl: './paychecks-home.component.html',
  styleUrl: './paychecks-home.component.scss',
})
export class PaychecksHomeComponent implements OnInit {
  private _paycheckPeriodList: PaycheckPeriod[] = [];
  private _selectedPeriod: PaycheckPeriod = { month: 0, year: 0 };
  private _selectedYear: number = new Date().getFullYear();

  constructor(private readonly paycheckService: PaycheckService) {}

  public get paycheckPeriodList(): PaycheckPeriod[] {
    return this._paycheckPeriodList;
  }

  public get selectedPeriod(): PaycheckPeriod {
    return this._selectedPeriod;
  }

  public get selectedYear(): number {
    return this._selectedYear;
  }

  ngOnInit(): void {
    this.refresh();
  }

  getMonthName(monthNumber: number): string {
    // Ensure the monthNumber is valid (1-12)
    if (monthNumber < 1 || monthNumber > 12) {
      console.log('Error');
      throw new Error('Invalid month number. It should be between 1 and 12.');
    }

    const date = new Date(2000, monthNumber - 1); // Use any year, e.g., 2000
    let monthString = new Intl.DateTimeFormat('it-IT', {
      month: 'long',
    }).format(date);
    return monthString;
  }

  onSelectedIndexChanged(selectedIndex: number) {
    this._selectedPeriod = this.paycheckPeriodList[selectedIndex];
  }

  onYearSelectionChanged(newSelectedYear: number) {
    this._selectedYear = newSelectedYear;
    this.refresh();
  }

  refresh() {
    this._paycheckPeriodList = this.paycheckService.fetchPeriods(
      this.selectedYear,
    );
    this._selectedPeriod = this.paycheckPeriodList[0];
  }
}
