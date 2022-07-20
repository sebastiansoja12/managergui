import { Component, OnInit } from '@angular/core';
import {Subscription, throwError} from 'rxjs';
import {PaymentInformation} from '../../auth/model/PaymentInformation';
import {ParcelService} from '../../auth/service/parcel.service';
import {ActivatedRoute} from '@angular/router';
import {ParcelStatus} from '../../auth/model/enumeration/ParcelStatus';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Parcel} from '../../auth/model/parcel';

@Component({
  selector: 'app-parcel-reroute',
  templateUrl: './parcel-reroute.component.html',
  styleUrls: ['./parcel-reroute.component.css']
})
export class ParcelRerouteComponent implements OnInit {

  id: string;
  paymentRoute: Subscription;
  payment: PaymentInformation;
  isError: boolean;
  message: string;
  ifPaid: string;
  createParcelRerouteForm: FormGroup;
  parcel: Parcel;

  constructor(private parcelService: ParcelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.paymentRoute = this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
    this.parcelService.findParcelById(this.id).subscribe(data => {
      this.parcel = data;
    }, error => {
      this.isError = true;
      throwError(error);
      this.message = 'Paczka o id: ' + this.id + ' nie została znaleziona.\n' +
        'Sprawdź numer swojej przesyłki i spróbuj ponownie';
    });

    this.createParcelRerouteForm = new FormGroup({
      firstName: new FormControl(this.parcel.firstName, Validators.maxLength(12)),
      lastName: new FormControl(this.parcel.lastName, Validators.maxLength(12)),
      senderTelephone: new FormControl(this.parcel.senderTelephone, Validators.maxLength(9)),
      senderEmail: new FormControl(this.parcel.senderEmail, Validators.maxLength(12)),
      recipientFirstName: new FormControl(this.parcel.recipientFirstName, Validators.maxLength(12)),
      recipientLastName: new FormControl(this.parcel.recipientLastName, Validators.maxLength(12)),
      recipientTelephone: new FormControl(this.parcel.recipientTelephone, Validators.maxLength(9)),
      recipientCity: new FormControl(this.parcel.recipientCity, Validators.maxLength(12)),
      recipientStreet: new FormControl(this.parcel.recipientStreet, Validators.maxLength(12)),
      recipientEmail: new FormControl(this.parcel.recipientEmail, Validators.maxLength(12)),
      recipientPostalCode: new FormControl('' + this.parcel.recipientPostalCode, Validators.required),
    });
  }

  updateParcel(): any {
    this.parcel.firstName = this.createParcelRerouteForm.get('firstName').value;
    this.parcel.lastName = this.createParcelRerouteForm.get('lastName').value;
    this.parcel.senderTelephone = this.createParcelRerouteForm.get('senderTelephone').value;
    this.parcel.senderEmail = this.createParcelRerouteForm.get('senderEmail').value;
    this.parcel.recipientFirstName = this.createParcelRerouteForm.get('recipientFirstName').value;
    this.parcel.recipientLastName = this.createParcelRerouteForm.get('recipientLastName').value;
    this.parcel.recipientTelephone = this.createParcelRerouteForm.get('recipientTelephone').value;
    this.parcel.recipientCity = this.createParcelRerouteForm.get('recipientCity').value;
    this.parcel.recipientStreet = this.createParcelRerouteForm.get('recipientStreet').value;
    this.parcel.recipientEmail = this.createParcelRerouteForm.get('recipientEmail').value;
    this.parcel.recipientPostalCode = this.createParcelRerouteForm.get('recipientPostalCode').value;
    this.parcelService.updateParcel(this.parcel)
      .subscribe(data => {
        this.isError = false;
      }, error => {
        this.isError = true;
        throwError(error);
      });
  }
}
