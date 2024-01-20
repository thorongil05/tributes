import { Component, OnInit } from '@angular/core';
import { BondType } from 'src/app/model/bond-type';
import { InvestmentsService } from 'src/app/services/investments.service';

@Component({
  selector: 'app-bond-forecaster',
  templateUrl: './bond-forecaster.component.html',
  styleUrls: ['./bond-forecaster.component.scss'],
})
export class BondForecasterComponent implements OnInit {
  private _bondTypes: BondType[] = [];

  constructor(private investmentsService: InvestmentsService) {}

  ngOnInit(): void {
    this._bondTypes = this.investmentsService.getBondTypes();
  }

  public get bondTypes(): BondType[] {
    return this._bondTypes;
  }
}
