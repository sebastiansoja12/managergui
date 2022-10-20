import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {globalUrl} from '../../../../../urlConfig';
import {RerouteRequest} from '../../dto/RerouteRequest';
import {TokenValidationRequest} from '../../dto/TokenValidationRequest';
import {UpdateParcelRequest} from '../../dto/UpdateParcelRequest';

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
