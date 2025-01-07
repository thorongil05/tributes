export interface PaycheckEntry {
  code: string;
  description: string;
  unityValue?: number;
  frequency?: number;
  withholdings?: number;
  amount?: number;
}
