import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {RouteService} from '../../../services/route/route-service.service';
import {Route} from '../../../services/model/route';
import {throwError} from 'rxjs';
import {Depot} from '../../../services/model/depot';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupRequestPayload: {
    username: string;
    password: string;
    email: string;
    role: string;
    firstName: string;
    lastName: string;
    depotCode: any
  };
  signupForm: FormGroup;
  depot: Depot[];
  route: Route[];
  isError: boolean;

  constructor(private authService: AuthService, private router: Router,
              private toastr: ToastrService, private routeService: RouteService) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password: '',
      role: '',
      firstName: '',
      lastName: '',
      depotCode: ''
    };
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.routeService.findAllDepots().subscribe((data) => this.depot = data);
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      depotCode: new FormControl('', Validators.required)
    });
  }

  // tslint:disable-next-line:typedef
  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email').value;
    this.signupRequestPayload.username = this.signupForm.get('username').value;
    this.signupRequestPayload.password = this.signupForm.get('password').value;
    this.signupRequestPayload.firstName = this.signupForm.get('firstName').value;
    this.signupRequestPayload.lastName = this.signupForm.get('lastName').value;
    this.signupRequestPayload.depotCode = this.signupForm.get('depotCode').value;
    this.authService.signup(this.signupRequestPayload)
      .subscribe(() => {
        this.isError = false;
        window.location.reload();
      }, error => {
        console.log(error);
        this.isError = true;
        throwError(error);
        this.toastr.error('Rejestracja się nie powiodła');
      });
  }
}