import { Component, OnInit } from '@angular/core';
import {ParcelService} from '../../auth/service/parcel.service';
import {ActivatedRoute} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-client-parcel',
  templateUrl: './client-parcel.component.html',
  styleUrls: ['./client-parcel.component.css']
})
export class ClientParcelComponent implements OnInit {

  isError: boolean;
  id: string;
  message: string;


  constructor(private parcelService: ParcelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.parcelService.findParcelById(this.id).subscribe(data => {
    }, error => {
      this.isError = true;
      throwError(error);
      this.message = 'Paczka o id: ' + this.id + ' nie została znaleziona.\n' +
        'Sprawdź numer swojej przesyłki i spróbuj ponownie';
    });
  }

}
