import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bond } from 'src/app/features/investments/model/bond';
import { BondConstants } from 'src/app/features/investments/model/bond-constants';
import { BondType } from 'src/app/features/investments/model/bond-type';
import { InvestmentsService } from 'src/app/features/investments/services/investments.service';

@Component({
  selector: 'app-bond-forecaster',
  templateUrl: './bond-forecaster.component.html',
  styleUrls: ['./bond-forecaster.component.scss'],
})
export class BondForecasterComponent implements OnInit {
  private _bond?: Bond;
  private _bondTypes: BondType[] = [];

  private readonly _bondTypeFormGroup: FormGroup = new FormGroup({
    bondTypeFormControl: new FormControl<BondType>(BondType.BTP, [
      Validators.required,
    ]),
  });

  private readonly _formGroup: FormGroup = new FormGroup({
    nameFormControl: new FormControl('', [
      Validators.required,
      Validators.pattern(BondConstants.FINECO_NAME_PATTERN),
    ]),
    isin: new FormControl('', [
      Validators.required,
      Validators.pattern(BondConstants.ISIN_PATTERN),
    ]),
    currentValueFormControl: new FormControl<number>(0),
  });

  constructor(private readonly investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this._bondTypes = this.investmentsService.getBondTypes();
  }

  public get bondTypeFormGroup(): FormGroup {
    return this._bondTypeFormGroup;
  }

  public get bondTypes(): BondType[] {
    return this._bondTypes;
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public get bond(): Bond | undefined {
    return this._bond;
  }
  public set bond(value: Bond | undefined) {
    this._bond = value;
  }

  public isBTPSelected() {
    console.log(this.bondTypeFormGroup.value);
    return this.bondTypeFormGroup.value['bondTypeFormControl'] == BondType.BTP;
  }

  public compute() {
    console.log(this.formGroup);
    if (!this.formGroup.valid) {
      alert('La form non é valida');
      return;
    }
    this.bond = this.investmentsService.extractBondDataFromName(
      this.formGroup.get('name')?.value,
      BondType.BTP,
    );
  }
}
