export interface Paycheck {
  period: PaycheckPeriod;
  entries: PaycheckEntry[];
}
export interface PaycheckEntry {
  code?: string;
  type?: string;
  description?: string;
  unityValue?: number;
  frequency?: number;
  withholdings?: number;
  taxableAmount?: number;
  amount?: number;
}

export interface PaycheckPeriod {
  month: number;
  year: number;
}

export interface PaycheckWithholding {
  type: string;
  taxableAmount: number;
  withHoldingAmount: number;
}
