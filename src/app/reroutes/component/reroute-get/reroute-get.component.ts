import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenValidationRequest} from '../../dto/TokenValidationRequest';
import { Router} from '@angular/router';
import {RerouteService} from '../../service/reroute/reroute.service';

@Component({
  selector: 'app-reroute-get',
  templateUrl: './reroute-get.component.html',
  styleUrls: ['./reroute-get.component.css']
})
export class RerouteGetComponent implements OnInit {

  constructor(private rerouteService: RerouteService, private router: Router) {
    this.tokenValidationRequest = {
      parcelId: '',
      token: null,
    };
  }
  submitParcelAndTokenForm: FormGroup;
  focus;
  focus2;
  isError: boolean;
  shouldShowSuccessAlert: boolean;
  tokenValidationRequest: TokenValidationRequest;
  parcelId: string;

  ngOnInit(): void {
    this.submitParcelAndTokenForm = new FormGroup({
      parcelId: new FormControl('', Validators.required),
      token: new FormControl('', Validators.required)
    });
  }

  redirectToEditPage(): void {
    this.tokenValidationRequest.parcelId = this.submitParcelAndTokenForm.get('parcelId').value;
    this.tokenValidationRequest.token = this.submitParcelAndTokenForm.get('token').value;
    this.rerouteService.validateToken(this.tokenValidationRequest).subscribe(data => {
      this.isError = false;
      this.router.navigateByUrl('reroute-edit/' + this.tokenValidationRequest.parcelId + '/' + this.tokenValidationRequest.token);
    }, error => {
      this.isError = true;
      throwError(error);
    });
  }
}
