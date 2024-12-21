export class TaxInfo {
  private readonly _beforeTaxationAmount: number;
  private _afterTaxationAmount: number = 0;
  private _taxationAmount: number = 0;
  private _taxationRate: number;
  private readonly _taxableAmount: number;

  constructor(beforeTaxationAmount: number, taxationRate: number) {
    this._beforeTaxationAmount = beforeTaxationAmount;
    this._taxationRate = taxationRate;
    this._taxableAmount = beforeTaxationAmount;
    this.computeAfterTaxationAmount();
  }

  public get taxationAmount(): number {
    return this._taxationAmount;
  }

  public get taxableAmount(): number {
    return this._taxableAmount;
  }

  public get taxationRate(): number {
    return this._taxationRate;
  }

  public get afterTaxationAmount(): number {
    return this._afterTaxationAmount;
  }

  public get beforeTaxationAmount(): number {
    return this._beforeTaxationAmount;
  }

  public set taxationRate(v: number) {
    this._taxationRate = v;
    this.computeAfterTaxationAmount();
  }

  computeAfterTaxationAmount() {
    this._taxationAmount = this._taxationRate * this._beforeTaxationAmount;
    this._afterTaxationAmount =
      this._beforeTaxationAmount - this._taxationAmount;
  }
}
