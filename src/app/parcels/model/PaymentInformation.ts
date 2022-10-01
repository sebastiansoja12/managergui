import {Parcel} from './parcel';


export class PaymentInformation {
  paypalId: string;
  amount: string;
  parcelStatus: string;
  paymentUrl: string;
  parcel: Parcel;
}
