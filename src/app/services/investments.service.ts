import { Injectable } from '@angular/core';
import { BondType } from '../model/bond-type';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  getBondTypes() {
    return [BondType.BOT, BondType.BTP];
  }
}
