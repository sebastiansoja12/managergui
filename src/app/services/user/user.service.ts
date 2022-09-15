import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import {globalUrl} from '../../../../urlConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string;
  adminUrl: string;
  url: string;


  constructor(private http: HttpClient, private localStorage: LocalStorageService) {
    this.userUrl = '/api/users/all';
    this.adminUrl = 'http://localhost:8080/api/users/all/user/';
    this.url = globalUrl.url;
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + this.userUrl);
  }

}
