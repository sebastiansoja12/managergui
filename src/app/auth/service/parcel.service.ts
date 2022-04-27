import {EventEmitter, Injectable, Output} from '@angular/core';
import {Parcel} from '../model/parcel';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {PaymentInformation} from '../model/PaymentInformation';
import {map, filter, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {


  @Output() paymentUrl: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private localStorage: LocalStorageService,
              private authService: AuthService, private router: Router) {
  }


  public save(parcel: Parcel): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', this.localStorage.retrieve('authenticationToken'));

    return this.http.post('http://localhost:8080/api/parcels', parcel, {responseType: 'text'})
      .pipe(map(data => {
        return true;
      }));
  }

  findPaymentByParcelId(id: string): Observable<PaymentInformation> {
    return this.http.get<PaymentInformation>('http://localhost:8080/api/payments/' + id);
  }

  public saveParcel(parcel: Parcel): Observable<boolean> {
    return this.http.post('http://localhost:8080/api/parcels', parcel, {responseType: 'text'})
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
