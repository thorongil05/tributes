import { BondType } from './bond-type';

export interface Bond {
  fullName: string;
  type: BondType;
  expirationDate: Date;
  annualCoupon: number; // Cedola annuale
  remainingPeriod: number;
}
