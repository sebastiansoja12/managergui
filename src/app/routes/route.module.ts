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
import {RouteFormComponent} from './component/route-find/route-form.component';
import {RouteGetComponent} from './component/route-get/route-get.component';
import {RouteListComponent} from './component/route-list/route-list.component';
import {RouteViewComponent} from './component/route-view/route-view.component';
import {RouteService} from './service/route/route-service.service';
import {SupplierService} from './service/supplier/supplier.service';
import {Supplier} from './model/supplier';
import {Depot} from './model/depot';
import {Parcel} from './model/parcel';
import {User} from './model/user';
import {AuthModule} from '../auth/auth.module';
import {AuthService} from '../auth/service/auth/auth.service';
import {Route} from './model/route';

@NgModule({
  declarations: [
    RouteFormComponent,
    RouteGetComponent,
    RouteListComponent,
    RouteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
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
    RouteService,
    SupplierService,
    Supplier,
    Depot,
    Parcel,
    User,
    Route,
    AuthService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class RouteModule { }
