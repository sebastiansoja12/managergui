import {User} from './user';
import {Parcel} from './parcel';
import DateTimeFormat = Intl.DateTimeFormat;
import {Supplier} from './supplier';
import {Depot} from './depot';


export class Route {
  id: string;
  created: DateTimeFormat;
  user: User;
  depot: Depot;
  parcel: Parcel;
  supplier: Supplier;

}
