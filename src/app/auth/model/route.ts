import {User} from './user';
import {Depot} from './depot';
import {Parcel} from './parcel';
import DateTimeFormat = Intl.DateTimeFormat;


export class Route {
  id: string;
  created: DateTimeFormat;
  user: User;
  depot: Depot;
  parcel: Parcel;

}
