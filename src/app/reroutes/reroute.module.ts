import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from '@angular/router';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AppRoutingModule} from '../app-routing.module';
import {DatePipe} from '@angular/common';
import {RerouteCreateComponent} from './component/reroute-create/reroute-create.component';
import {RerouteEditComponent} from './component/reroute-edit/reroute-edit.component';
import {RerouteGetComponent} from './component/reroute-get/reroute-get.component';
import {RerouteService} from './service/reroute/reroute.service';
import {ParcelService} from './service/parcel/parcel.service';
import {Parcel} from './model/parcel';

@NgModule({
  declarations: [
    RerouteCreateComponent,
    RerouteEditComponent,
    RerouteGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    Parcel,
    RerouteService,
    ParcelService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RerouteModule { }
