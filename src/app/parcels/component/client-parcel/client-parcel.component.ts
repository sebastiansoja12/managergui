import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription, throwError} from 'rxjs';
import {Parcel} from '../../model/parcel';
import {ParcelService} from '../../service/parcel/parcel.service';

@Component({
  selector: 'app-client-parcel',
  templateUrl: './client-parcel.component.html',
  styleUrls: ['./client-parcel.component.css']
})
export class ClientParcelComponent implements OnInit {

  isError: boolean;
  id: number;
  message: string;
  paymentRoute: Subscription;
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
  }

}
