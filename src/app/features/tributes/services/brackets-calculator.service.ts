import { Injectable } from '@angular/core';
import {
  Bracket,
  BracketAppliedToTaxableIncome,
} from '../model/tributes-model';

@Injectable({
  providedIn: 'root',
})
export default class BracketsCalculatorService {
  // https://www.agenziaentrate.gov.it/portale/imposta-sul-reddito-delle-persone-fisiche-irpef-/aliquote-e-calcolo-dell-irpef

  constructor() {}

  public computeBracketsAppliedToTaxableIncome(
    brackets: Bracket[],
    taxableIncome: number
  ): BracketAppliedToTaxableIncome[] {
    let bracketsAppliedToTaxableIncome: BracketAppliedToTaxableIncome[] = [];

    // Make sure brackets are sorted by lower boundary (ASC)
    brackets.sort((a, b) => (a.lowerBoundary < b.lowerBoundary ? -1 : 1));

    brackets.forEach((bracket) => {
      // If upper boundary exists we are not in the higher bracket
      if (bracket.upperBoundary) {
        // If taxable income falls in the bracket
        if (
          taxableIncome >= bracket.lowerBoundary &&
          taxableIncome <= bracket.upperBoundary
        ) {
          bracketsAppliedToTaxableIncome.push({
            bracket: bracket,
            taxAmount:
              (taxableIncome - bracket.lowerBoundary) * (bracket.rate / 100),
          });
        }
        // If taxable income hits the superior boundary
        if (taxableIncome >= bracket.upperBoundary) {
          bracketsAppliedToTaxableIncome.push({
            bracket: bracket,
            taxAmount: (bracket.rate / 100) * bracket.upperBoundary,
          });
        }
      } else {
        // We are in the higher bracket
        if (taxableIncome >= bracket.lowerBoundary) {
          bracketsAppliedToTaxableIncome.push({
            bracket: bracket,
            taxAmount:
              (taxableIncome - bracket.lowerBoundary) * (bracket.rate / 100),
          });
        } else {
          bracketsAppliedToTaxableIncome.push({
            bracket: bracket,
          });
        }
      }
    });
    return bracketsAppliedToTaxableIncome;
  }
}
