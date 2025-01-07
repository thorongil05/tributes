import { Component, Input } from '@angular/core';
import { PaycheckPeriod, PaycheckWithholding } from '../model/paycheck';
import { PaycheckService } from '../service/paycheck.service';

@Component({
  selector: 'app-paychecks-withholdings',
  templateUrl: './paychecks-withholdings.component.html',
  styleUrl: './paychecks-withholdings.component.scss',
})
export class PaychecksWithholdingsComponent {
  @Input() referencePeriod: PaycheckPeriod = {
    month: 0,
    year: 0,
  };

  constructor(private readonly paychecksService: PaycheckService) {}

  public get displayableColumns(): string[] {
    return ['type', 'taxableAmount', 'withHoldingAmount'];
  }

  public get withHoldingList(): PaycheckWithholding[] {
    return this.paychecksService.fetchPaychecksWithHoldingByPeriod(
      this.referencePeriod,
    );
  }

  public get totalWithHoldingAmount(): number {
    return this.paychecksService.fetchPaychecksTotalWithHolding(
      this.referencePeriod,
    );
  }
}
