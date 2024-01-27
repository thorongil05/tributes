import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bond } from 'src/app/model/bond';
import { BondConstants } from 'src/app/model/bond-constants';
import { BondType } from 'src/app/model/bond-type';
import { InvestmentsService } from 'src/app/services/investments.service';

@Component({
  selector: 'app-bond-forecaster',
  templateUrl: './bond-forecaster.component.html',
  styleUrls: ['./bond-forecaster.component.scss'],
})
export class BondForecasterComponent implements OnInit {
  private _bond?: Bond;
  private _bondTypes: BondType[] = [];
  private _formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(BondConstants.FINECO_NAME_PATTERN),
    ]),
    isin: new FormControl('', [
      Validators.required,
      Validators.pattern(BondConstants.ISIN_PATTERN),
    ]),
  });

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this._bondTypes = this.investmentsService.getBondTypes();
  }

  public get bondTypes(): BondType[] {
    return this._bondTypes;
  }

  public get formGroup(): FormGroup {
    return this._formGroup;
  }

  public compute() {
    console.log(this.formGroup);
    if (!this.formGroup.valid) {
      alert('La form non é valida');
      return;
    }
    alert('La form é valida');
  }
}
