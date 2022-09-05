import {EventEmitter, Injectable, Output} from '@angular/core';
import {Parcel} from '../model/parcel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {PaymentInformation} from '../model/PaymentInformation';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {globalUrl} from 'urlConfig.js';


@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  url: string;

  @Output() paymentUrl: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private localStorage: LocalStorageService,
              private router: Router) {
    this.url = globalUrl.url;
  }


  public save(parcel: Parcel): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', this.localStorage.retrieve('authenticationToken'));

    return this.http.post(this.url + '/api/parcels', parcel, {responseType: 'text'})
      .pipe(map(data => {
        return true;
      }));
  }

  findPaymentByParcelId(id: number): Observable<PaymentInformation> {
    return this.http.get<PaymentInformation>(this.url + '/payments/' + id);
  }

  findParcelById(id: number): Observable<Parcel> {
    return this.http.get<Parcel>(this.url + '/api/parcels/' + id);
  }

  public saveParcel(parcel: Parcel): Observable<boolean> {
    return this.http.post(this.url + '/api/parcels', parcel, {responseType: 'text'})
      .pipe(map(data => {
        this.localStorage.store('paymentUrl', data);
        this.paymentUrl.emit(data);
        return true;
      }));
  }

  getPaymentUrl(): string {
    return this.localStorage.retrieve('paymentUrl');
  }
}
