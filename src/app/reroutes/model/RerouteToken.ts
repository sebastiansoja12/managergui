import DateTimeFormat = Intl.DateTimeFormat;

export class RerouteToken {
  id: number;
  token: number;
  createdDate: DateTimeFormat;
  expiryDate: DateTimeFormat;
  parcelId: string;
}
