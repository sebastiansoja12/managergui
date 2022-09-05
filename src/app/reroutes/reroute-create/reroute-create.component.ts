import {Component, OnInit} from '@angular/core';
import {RerouteService} from '../service/reroute.service';
import {RerouteRequest} from '../model/RerouteRequest';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import { ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reroute-create',
  templateUrl: './reroute-create.component.html',
  styleUrls: ['./reroute-create.component.css']
})
export class RerouteCreateComponent implements OnInit {

  constructor(private rerouteService: RerouteService, private router: Router) {
    this.rerouteRequest = {
      parcelId: '',
      email: '',
    };
  }
  private toast: ToastrService;
  createRerouteForm: FormGroup;
  focus;
  focus2;
  isError: boolean;
  shouldShowSuccessAlert: boolean;
  rerouteRequest: RerouteRequest;
  parcelId: string;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.createRerouteForm = new FormGroup({
      parcelId: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  sendInformation(): void {
    this.rerouteRequest.parcelId = this.createRerouteForm.get('parcelId').value;
    this.rerouteRequest.email = this.createRerouteForm.get('email').value;
    this.rerouteService.sendInformation(this.rerouteRequest).subscribe(data => {
      this.isError = false;
      this.shouldShowSuccessAlert = true;
      this.toast.success('Wysłano link do edycji danych przesyłki');
    }, error => {
      this.isError = true;
      throwError(error);
    });
  }

  redirectToRerouteCreatePage(): any {
    this.router.navigateByUrl('reroute-get');
  }
}
