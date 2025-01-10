import { Injectable } from '@angular/core';
import { PaycheckHeader } from '../model/paycheck';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  private _compensationHeaderList: PaycheckHeader[] = [
    { code: '1000', description: 'Retribuzione/Stipendio' },
    { code: '2000', description: 'Buoni Pasto' },
    { code: '5000', description: 'Ferie Godute' },
    { code: '6548', description: 'CTR C/DIP ESONERO L.197/22' },
    { code: '8146', description: 'CREDITO D.L. 3/20 TOT DETR.TEO' },
    { code: '9487', description: 'ARROTONDAMENTO MESE PRECEDENTE' },
  ];

  public get compensationHeaderList(): PaycheckHeader[] {
    return this._compensationHeaderList;
  }
  public set compensationHeaderList(value: PaycheckHeader[]) {
    this._compensationHeaderList = value;
  }

  constructor() {}

  public fetchCompensationHeaderCandidates(): Observable<PaycheckHeader[]> {
    return new Observable((subscriber) => {
      subscriber.next(this.compensationHeaderList);
      subscriber.complete();
    });
  }
}
