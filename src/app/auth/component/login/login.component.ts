import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginRequestPayload } from '../../dto/login-request.payload';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isCollapsed = true;
  focus;
  focus2;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  isError: boolean;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

    ngOnInit(): any
    {
      this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });

      this.activatedRoute.queryParams
        .subscribe(params => {
          if (params.registered !== undefined && params.registered === 'true') {
            // this.toastr.success('Użytkownik zalogowany');
          }
        });

      const body = document.getElementsByTagName('body')[0];
      body.classList.add('register-page');
    }

    login(): any
    {
      this.loginRequestPayload.username = this.loginForm.get('username').value;
      this.loginRequestPayload.password = this.loginForm.get('password').value;

      this.authService.login(this.loginRequestPayload).subscribe(data => {
        this.isError = false;
        if (this.authService.isAdmin() === true) {
          window.location.assign('/admin/routes/' + this.authService.getUserName());
        } else {
          window.location.assign('routes');
        }

      }, error => {
        this.isError = true;
        throwError(error);
      });
    }
  }

