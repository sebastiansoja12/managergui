import {Parcel} from '../../services/model/parcel';

export class UpdateParcelRequest {
  id: string;
  parcel: Parcel;
  token: number;
}
