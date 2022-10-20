export class ParcelType {

  private static AllValues: { [name: string]: ParcelType } = {};

  static readonly TINY = new ParcelType('5cmx5cmx5cm', 10);
  static readonly SMALL = new ParcelType('10cmx10cmx10cm', 15);
  static readonly MEDIUM = new ParcelType('30cmx30cmx30cm', 20);
  static readonly AVERAGE = new ParcelType('50cmx50cmx50cm', 30);
  static readonly BIG = new ParcelType('80cmx80cmx80cm', 50);
  static readonly CUSTOM = new ParcelType('XcmXcmXcm', 70);

  private constructor(public readonly size: string, public readonly price: number) {
    ParcelType.AllValues[size] = this;
  }

  public static parseEnum(data: string): ParcelType {
    return ParcelType.AllValues[data];
  }

}
