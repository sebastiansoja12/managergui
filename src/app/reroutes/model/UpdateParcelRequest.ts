import {Parcel} from '../../auth/model/parcel';

export class UpdateParcelRequest {
  id: string;
  parcel: Parcel;
  token: number;
}
