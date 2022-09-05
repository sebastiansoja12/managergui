import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Route} from '../model/route';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LocalStorageService} from 'ngx-webstorage';
import {Depot} from '../model/depot';
import {globalUrl} from 'urlConfig.js';


@Injectable()
export class RouteService {

  routeUrl: string;
  depotinfUrl: string;
  registerParcel: string;
  userUrl: string;
  url: string;

  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.routeUrl = '/api/routes';
    this.depotinfUrl = '/api/depots';
    this.registerParcel = '/api/routes';
    this.userUrl = '/api/routes/user/';
    this.url = globalUrl.url;
  }

  findByUsername(username: string): Observable<Route[]> {
    return this.http.get<Route[]>(this.url + '/api/routes/' + username + '/user');
  }

  public findAll(): Observable<Route[]> {
    return this.http.get<Route[]>(this.url + this.routeUrl);
  }

  public findAllDepots(): Observable<Depot[]> {
    return this.http.get<Depot[]>(this.url + this.depotinfUrl);
  }

  public save(parcelRoute: Route): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic '
    });
    return this.http.post<Route>(this.registerParcel, parcelRoute, {headers}).pipe(map(data => {
      return true;
    }));
  }

  getAllRoutesByParcelId(id: number): Observable<Array<Route>> {
    return this.http.get<Array<Route>>(this.url + '/api/routes/' + id + '/parcelId');
  }

  deleteRouteByParcelId(id: number): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic '
    });
    return this.http.post<Route>(this.url + '/api/routes/' + id + '/parcelId', {headers});
  }
}
