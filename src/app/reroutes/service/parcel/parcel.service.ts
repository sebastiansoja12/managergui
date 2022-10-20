import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {globalUrl} from '../../../../../urlConfig';
import {Parcel} from '../../model/parcel';


@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = globalUrl.url;
  }


  findParcelById(id: number): Observable<Parcel> {
    return this.http.get<Parcel>(this.url + '/api/parcels/' + id);
  }
}
