import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {Observable} from 'rxjs';
import {globalUrl} from '../../../../urlConfig';
import {map} from 'rxjs/operators';
import {Supplier} from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  url: string;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.url = globalUrl.url;
  }

  public findAll(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.url + '/api/suppliers');
  }

  public saveSupplier(supplier: Supplier): Observable<boolean> {
    return this.http.post(this.url + '/api/suppliers', supplier, {responseType: 'text'})
      .pipe(map(data => {
        return true;
      }));
  }


}
