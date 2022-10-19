import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {globalUrl} from '../../../../../urlConfig';
import {Depot} from '../../model/depot';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  depotUrl: string;

  constructor(
    private depot: Depot, private http: HttpClient, private localStorage: LocalStorageService) {
    this.depotUrl = globalUrl.url + '/api/depots';
  }


  public findAll(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.depotUrl);
  }

  public saveDepot(depot: Array<Depot>): Observable<boolean> {
    return this.http.post(this.depotUrl, depot, {responseType: 'text'})
      .pipe(map(data => {
        return true;
      }));
  }

}
