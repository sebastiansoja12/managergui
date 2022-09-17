import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Supplier} from '../../model/supplier';
import {globalUrl} from '../../../../../urlConfig';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = globalUrl.url;
  }

  public findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url + '/api/suppliers');
  }
}
