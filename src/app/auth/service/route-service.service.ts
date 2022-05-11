import {Injectable, AfterViewInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Route} from '../model/route';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {LoginResponse} from '../login/login-response.payload';
import {LocalStorageService} from 'ngx-webstorage';
import {RouteRequestPayload} from '../../routes/route-find/route-request.payload';
import {User} from '../model/user';
import {Depot} from '../model/depot';
import {Parcel} from '../model/parcel';
import {CreateRouteRequestPayload} from '../../routes/route-get/CreateRouteRequestPayload';


@Injectable()
export class RouteService {

  url: string;


  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.url = 'https://inparcel.herokuapp.com';
  }

  findByUsername(username: string): Observable<Route[]> {
    return this.http.get<Route[]>(this.url + '/api/routes/' + username + '/user');
  }

  public findAll(): Observable<Route[]> {
    return this.http.get<Route[]>(this.url + '/api/routes');
  }

  public findTemporaryRoutes(): Observable<any> {
    return this.http.get<Array<Route>>(this.url + '/api/routes/tmp');
  }

  public findAllDepots(): Observable<Depot[]> {

    return this.http.get<Depot[]>(this.url + '/api/depots');
  }

  public getCity(): string {
    return this.localStorage.retrieve('city');
  }

  public saveTemporary(parcelRoute: Route): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic '
    });
    return this.http.post<Route>(this.url + '/api/routes/tmp', parcelRoute, {headers}).pipe(map(data => {
      return true;
    }));
  }

  public save(parcelRoute: Array<Route>): Observable<boolean> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic '
    });
    return this.http.post<Route>(this.url + '/api/routes/tmp', parcelRoute, {headers}).pipe(map(data => {
      return true;
    }));
  }

  getAllRoutesByParcelId(id: string): Observable<Array<Route>> {
    return this.http.get<Array<Route>>(this.url + '/api/routes/' + id + '/parcelId');
  }

  deleteRouteByParcelId(id: string): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic '
    });
    return this.http.post<Route>(this.url + '/api/routes/' + id + '/parcelId', {headers});
  }
}
