import {Parcel} from '../model/parcel';

export class UpdateParcelRequest {
  id: string;
  parcel: Parcel;
  token: number;
}
