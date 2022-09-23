import {ParcelTypeDetermination} from './enumeration/ParcelTypeDetermination';


export class Parcel {
  id: number;
  firstName: string;
  lastName: string;
  senderTelephone: string;
  senderEmail: string;
  senderCity: string;
  senderStreet: string;
  senderPostalCode: string;
  recipientTelephone: string;
  recipientCity: string;
  recipientEmail: string;
  recipientFirstName: string;
  recipientLastName: string;
  recipientStreet: string;
  recipientPostalCode: string;
  price: number;
  parcelType: ParcelTypeDetermination;
}
