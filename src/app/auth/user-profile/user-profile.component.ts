import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: Array<User>;
  users2: User;
  email: string;
  depotCode: string;
  firstName: string;
  city: string;
  username: string;
  isCollapsed = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getCurrentLoggedInUser().subscribe(data => {
      this.users = data;
    });
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    this.username = this.authService.getUserName();
  }

  // tslint:disable-next-line:use-lifecycle-interface
    ngOnDestroy(): any {
      const body = document.getElementsByTagName('body')[0];
      body.classList.remove('profile-page');
    }
  }

