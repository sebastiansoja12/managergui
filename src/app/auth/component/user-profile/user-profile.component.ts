import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: Array<User>;
  email: string;
  depotCode: string;
  city: string;
  username: string;

  constructor(private authService: AuthService) { }

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

