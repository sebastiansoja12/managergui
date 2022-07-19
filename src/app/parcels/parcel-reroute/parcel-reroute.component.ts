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
    this.parcelService.findPaymentByParcelId(this.id).subscribe(data => {
      this.payment = data;
    }, error => {
      this.isError = true;
      throwError(error);
      this.message = 'Paczka o id: ' + this.id + ' nie została znaleziona.\n' +
        'Sprawdź numer swojej przesyłki i spróbuj ponownie';
    });
    this.parcelService.findParcelById(this.id).subscribe(data => {
      this.parcel = data;
    }, error => {
      this.isError = true;
      throwError(error);
      this.message = 'Paczka o id: ' + this.id + ' nie została znaleziona.\n' +
        'Sprawdź numer swojej przesyłki i spróbuj ponownie';
    });
    if (this.payment.parcelStatus === ParcelStatus.NOT_PAID.toString()) {
      this.ifPaid = 'Nieopłacone';
    }
    if (this.payment.parcelStatus === ParcelStatus.PAID.toString()) {
      this.ifPaid = 'Opłacone';
    }

    this.createParcelRerouteForm = new FormGroup({
      firstName: new FormControl(this.parcel.firstName, Validators.required),
      lastName: new FormControl(this.parcel.lastName, Validators.required),
      senderTelephone: new FormControl(this.parcel.senderTelephone, Validators.required),
      senderEmail: new FormControl(this.parcel.senderEmail, Validators.required),
      recipientFirstName: new FormControl(this.parcel.recipientFirstName, Validators.required),
      recipientLastName: new FormControl(this.parcel.recipientLastName, Validators.required),
      recipientTelephone: new FormControl(this.parcel.recipientTelephone, Validators.required),
      recipientCity: new FormControl(this.parcel.recipientCity, Validators.required),
      recipientStreet: new FormControl(this.parcel.recipientStreet, Validators.required),
      recipientEmail: new FormControl(this.parcel.recipientEmail, Validators.required),
      recipientPostalCode: new FormControl(this.parcel.recipientPostalCode, Validators.required),
      parcelType: new FormControl(this.parcel.parcelType, Validators.required)
    });
  }
}
