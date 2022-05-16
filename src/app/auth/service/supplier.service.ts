import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';
import {Supplier} from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url: string;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.url = 'https://inparcel.herokuapp.com';
  }

  public findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url + '/api/suppliers');
  }


}
