import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {globalUrl} from '../../../../../urlConfig';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string;
  url: string;


  constructor(private http: HttpClient) {
    this.userUrl = '/api/users/all';
    this.url = globalUrl.url;
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + this.userUrl);
  }

}
