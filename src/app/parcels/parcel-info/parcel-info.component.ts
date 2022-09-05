import {Component, OnInit} from '@angular/core';
import {ParcelService} from '../../auth/service/parcel.service';
import {PaymentInformation} from '../../auth/model/PaymentInformation';
import {Subscription, throwError} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ParcelStatus} from '../../auth/model/enumeration/ParcelStatus';

@Component({
  selector: 'app-parcel-info',
  templateUrl: './parcel-info.component.html',
  styleUrls: ['./parcel-info.component.css']
})
export class ParcelInfoComponent implements OnInit {

  id: number;
  paymentRoute: Subscription;
  payment: PaymentInformation;
  isError: boolean;
  message: string;
  ifPaid: string;
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
    if (this.payment.parcelStatus === ParcelStatus.NOT_PAID.toString()) {
      this.ifPaid = 'Nieopłacone';
    }
    if (this.payment.parcelStatus === ParcelStatus.PAID.toString()) {
      this.ifPaid = 'Opłacone';
    }
  }

}
