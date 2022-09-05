import {Component, OnInit} from '@angular/core';
import {RerouteService} from '../service/reroute.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RerouteRequest} from '../model/RerouteRequest';
import {ParcelService} from '../../auth/service/parcel.service';
import {Subscription, throwError} from 'rxjs';
import {Parcel} from '../../auth/model/parcel';
import {ActivatedRoute} from '@angular/router';
import {UpdateParcelRequest} from '../model/UpdateParcelRequest';

@Component({
  selector: 'app-reroute-edit',
  templateUrl: './reroute-edit.component.html',
  styleUrls: ['./reroute-edit.component.css']
})
export class RerouteEditComponent implements OnInit {

  constructor(private rerouteService: RerouteService, private parcelService: ParcelService, private activatedRoute: ActivatedRoute) {
    this.updateParcelRequest = {
      id: '',
      parcel: null,
      token: null
    };
  }

  updateParcelForm: FormGroup;
  focus;
  focus2;
  isError: boolean;
  isSuccessfullyUpdated: boolean;
  parcelId: any;
  parcel: Parcel;
  routeSub: Subscription;
  private updateParcelRequest: UpdateParcelRequest;
  token: any;

  ngOnInit(): any {
    this.routeSub = this.activatedRoute.paramMap.subscribe(params => {
      this.parcelId = params.get('id');
      this.token = params.get('token');
    });
    this.parcelService.findParcelById(this.parcelId).subscribe(data => {
      this.parcel = data;
      this.isError = false;
    }, error => {
      this.isError = true;
      throwError(error);
    });
    this.updateParcelForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      senderTelephone: new FormControl('', Validators.required),
      senderEmail: new FormControl('', Validators.required),
      recipientFirstName: new FormControl('', Validators.required),
      recipientLastName: new FormControl('', Validators.required),
      recipientTelephone: new FormControl('', Validators.required),
      recipientCity: new FormControl('', Validators.required),
      recipientStreet: new FormControl('', Validators.required),
      recipientEmail: new FormControl('', Validators.required),
      recipientPostalCode: new FormControl('', Validators.required),
    });
  }

  updateParcel(): any {
    this.parcel.firstName = this.updateParcelForm.get('firstName').value;
    this.parcel.lastName = this.updateParcelForm.get('lastName').value;
    this.parcel.senderTelephone = this.updateParcelForm.get('senderTelephone').value;
    this.parcel.senderEmail = this.updateParcelForm.get('senderEmail').value;
    this.parcel.recipientFirstName = this.updateParcelForm.get('recipientFirstName').value;
    this.parcel.recipientLastName = this.updateParcelForm.get('recipientLastName').value;
    this.parcel.recipientTelephone = this.updateParcelForm.get('recipientTelephone').value;
    this.parcel.recipientCity = this.updateParcelForm.get('recipientCity').value;
    this.parcel.recipientStreet = this.updateParcelForm.get('recipientStreet').value;
    this.parcel.recipientEmail = this.updateParcelForm.get('recipientEmail').value;
    this.parcel.recipientPostalCode = this.updateParcelForm.get('recipientPostalCode').value;
    this.updateParcelRequest.parcel = this.parcel;
    this.updateParcelRequest.id = this.parcelId;
    this.updateParcelRequest.token = this.token;
    this.rerouteService.updateParcel(this.updateParcelRequest)
      .subscribe(data => {
        this.isSuccessfullyUpdated = true;
      }, error => {
        this.isSuccessfullyUpdated = false;
        throwError(error);
      });
  }


}
