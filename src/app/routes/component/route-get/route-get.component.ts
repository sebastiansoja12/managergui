import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../../../services/route/route-service.service';
import {LocalStorageService} from 'ngx-webstorage';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription, throwError, timer} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {ParcelService} from '../../../services/parcel/parcel.service';
import {SupplierService} from '../../../services/supplier/supplier.service';
import {globalUrl} from 'urlConfig.js';
import {Supplier} from '../../../services/model/supplier';
import {Route} from '../../../services/model/route';
import {Depot} from '../../../services/model/depot';
import {Parcel} from '../../../services/model/parcel';

@Component({
  selector: 'app-route-get',
  templateUrl: './route-get.component.html',
  styleUrls: ['./route-get.component.css']
})
export class RouteGetComponent implements OnInit {

  getRouteForm: FormGroup;
  depot: Depot;
  isError: boolean;
  routes: Route[];
  routesList: Route[];
  temporaryRoutesList: Route[];
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  supplierArray: Supplier[];
  url: string;
  parcelId: string;
  id: number;

  createRouteRequestPayload: {
    id: string;
    supplierCode: string;
  };

  constructor(private routeService: RouteService, private parcelService: ParcelService,
              private localStorage: LocalStorageService,
              private router: Router,
              private parcel: Parcel,
              private route: Route,
              private activatedRoute: ActivatedRoute,
              private supplierService: SupplierService,
              private supplier: Supplier) {
    this.createRouteRequestPayload = {
      id: '',
      supplierCode: '',
    };
    this.url = globalUrl.url;
  }

  ngOnInit(): void {
    this.getRouteForm = new FormGroup({
      id: new FormControl('', Validators.required),
      supplierCode: new FormControl('', Validators.required)
    });

    this.routeService.findAll().subscribe(data => {
      this.routesList = data;
    });

    this.supplierService.findAll().subscribe(data => {
      this.supplierArray = data;
    });

    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  getRoute(): any {
    this.parcel.id  = this.getRouteForm.get('id').value;
    this.supplier.supplierCode = this.getRouteForm.get('supplierCode').value;
    this.route.parcel = this.parcel;
    this.route.supplier = this.supplier;
    this.routeService.save(this.route).subscribe(data => {
      this.isError = false;
    }, error => {
      this.isError = true;
      throwError(error);
    });
    window.location.reload();
  }

  printLabel(): any {
    this.parcel.id  = this.getRouteForm.get('id').value;
    window.location.href = this.url + '/api/parcels/' + this.parcel.id + '/label';

  }

  toCSV(): any {
    this.parcel.id  = this.getRouteForm.get('id').value;
    window.location.href = this.url + '/api/parcels/' + this.parcel.id + '/csv';
  }
  deleteRoute(): any {
    this.id  = this.getRouteForm.get('id').value;
    this.route.parcel = this.parcel;
    this.routeService.deleteRouteByParcelId(this.id).subscribe(() => {
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
