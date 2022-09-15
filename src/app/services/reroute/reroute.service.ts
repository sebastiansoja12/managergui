import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RerouteRequest} from '../../reroutes/dto/RerouteRequest';
import {TokenValidationRequest} from '../../reroutes/dto/TokenValidationRequest';
import {UpdateParcelRequest} from '../../reroutes/dto/UpdateParcelRequest';
import {globalUrl} from '../../../../urlConfig';

@Injectable({
  providedIn: 'root'
})
export class RerouteService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = globalUrl.url + '/api/reroute';
  }

  sendInformation(rerouteRequest: RerouteRequest): Observable<boolean> {
    return this.httpClient.post(this.url + '/information',
      rerouteRequest, { responseType: 'text' }).pipe(map(data => {
      return true;
    }));
  }

  validateToken(tokenValidationRequest: TokenValidationRequest): Observable<boolean> {
    return this.httpClient.post(this.url + '/valid',
      tokenValidationRequest, { responseType: 'text' }).pipe(map(data => {
      return true;
    }));
  }

  updateParcel(updateParcelRequest: UpdateParcelRequest): Observable<boolean> {
    return this.httpClient.post(this.url, updateParcelRequest, { responseType: 'text'}).pipe(map( data => {
      return true;
    }));
  }

}
