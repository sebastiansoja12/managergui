import { Injectable } from '@angular/core';
import {Route} from '../model/route';
import {Parcel} from '../model/parcel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ParcelPayload} from '../../parcels/parcel-add/parcel-payload';
import {tap} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {PaymentInformation} from '../model/PaymentInformation';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  url: string;

  constructor(private http: HttpClient, private localStorage: LocalStorageService,
              private authService: AuthService) {
    this.url = 'https://inparcel.herokuapp.com';
  }


  public save(parcel: Parcel): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.localStorage.retrieve('authenticationToken'));

    return this.http.post(this.url + '/api/parcels', parcel, { responseType: 'text' });
  }

  findPaymentByParcelId(id: string): Observable<PaymentInformation> {
    return this.http.get<PaymentInformation>(this.url + '/api/payments/'  + id);
  }

}
