import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  Bracket,
  BracketAppliedToTaxableIncome,
} from '../model/tributes-model';
import BracketsCalculatorService from '../services/brackets-calculator.service';
import { TaxInfo } from '../model/TaxInfo';

@Component({
  selector: 'app-brackets-detail',
  templateUrl: './brackets-detail.component.html',
  styleUrl: './brackets-detail.component.scss',
})
export class BracketsDetailComponent implements OnChanges {
  private _brackets: Bracket[] = [
    {
      lowerBoundary: 0,
      upperBoundary: 28000,
      rate: 23,
    },
    {
      lowerBoundary: 28001,
      upperBoundary: 50000,
      rate: 35,
    },
    {
      lowerBoundary: 50001,
      rate: 43,
    },
  ];

  private _bracketsAppliedToTaxableIncome: BracketAppliedToTaxableIncome[] = [];

  @Input() taxableIncome: number = 0;
  @Output() incomeTaxAmountChangedEvent: EventEmitter<TaxInfo> =
    new EventEmitter();

  constructor(
    private readonly _bracketsCalculatorService: BracketsCalculatorService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.bracketsAppliedToTaxableIncome =
      this._bracketsCalculatorService.computeBracketsAppliedToTaxableIncome(
        this.brackets,
        this.taxableIncome,
      );
    this.incomeTaxAmountChangedEvent.emit(this.taxInfo);
  }

  public get taxInfo(): TaxInfo {
    return new TaxInfo(this.taxableIncome, this.taxIncomeOnTaxableIncome);
  }

  public get bracketsAppliedToTaxableIncome(): BracketAppliedToTaxableIncome[] {
    return this._bracketsAppliedToTaxableIncome;
  }
  public set bracketsAppliedToTaxableIncome(
    value: BracketAppliedToTaxableIncome[],
  ) {
    this._bracketsAppliedToTaxableIncome = value;
  }

  public get brackets(): Bracket[] {
    return this._brackets;
  }
  public set brackets(value: Bracket[]) {
    this._brackets = value;
  }

  public get finalIncomeTax(): number {
    return this.bracketsAppliedToTaxableIncome
      .map((value) => (value.taxAmount ? value.taxAmount : 0))
      .reduce((sum, current) => sum + current, 0);
  }

  public get taxIncomeOnTaxableIncome(): number {
    return this.finalIncomeTax / this.taxableIncome;
  }
}
