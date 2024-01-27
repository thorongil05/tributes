export class BondConstants {
  public static readonly FINECO_NAME_PATTERN =
    '^[A-Z]{3}-[1-9]{1,2}[A-Z]{2}[1-9]{2} [0-9]{1,2}(?:[,]?[0-9]+)?'; // https://regex101.com/r/XM7tst/1
  public static readonly ISIN_PATTERN = '^[A-Z]{2}\\w{9}[0-9]{1}'; // https://regex101.com/r/52C1ar/1
}
