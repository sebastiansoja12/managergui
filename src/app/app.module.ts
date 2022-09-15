import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/component/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './auth/component/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {TokenInterceptor} from './token-interceptor';
import {HomeComponent} from './home/home.component';
import { RouteListComponent } from './routes/component/route-list/route-list.component';
import { RouteFormComponent } from './routes/component/route-find/route-form.component';
import { RouteViewComponent } from './routes/component/route-view/route-view.component';
import { ParcelAddComponent } from './parcels/component/parcel-add/parcel-add.component';
import {ParcelService} from './services/parcel/parcel.service';
import {Parcel} from './services/model/parcel';
import {RouteService} from './services/route/route-service.service';
import { RouteGetComponent } from './routes/component/route-get/route-get.component';
import {Route} from './services/model/route';
import { UserProfileComponent } from './auth/component/user-profile/user-profile.component';
import {APP_BASE_HREF, DatePipe} from '@angular/common';
import { AdministratorComponent } from './administrator/administrator.component';
import {RouterModule} from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HeaderComponent} from './header/component/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParcelInfoComponent } from './parcels/component/parcel-info/parcel-info.component';
import {SupplierService} from './services/supplier/supplier.service';
import { ClientParcelComponent } from './parcels/component/client-parcel/client-parcel.component';
import { RerouteGetComponent } from './reroutes/component/reroute-get/reroute-get.component';
import { RerouteEditComponent } from './reroutes/component/reroute-edit/reroute-edit.component';
import { RerouteCreateComponent } from './reroutes/component/reroute-create/reroute-create.component';
import { ParcelAllComponent } from './parcels/component/parcel-all/parcel-all.component';
import {Supplier} from './services/model/supplier';
import {Depot} from './services/model/depot';
import {DepotModule} from './depots/depot.module';
import {SupplierModule} from './suppliers/supplier.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RouteListComponent,
    RouteFormComponent,
    RouteViewComponent,
    ParcelAddComponent,
    RouteGetComponent,
    AdministratorComponent,
    HeaderComponent,
    FooterComponent,
    ParcelInfoComponent,
    ClientParcelComponent,
    RerouteGetComponent,
    RerouteEditComponent,
    RerouteCreateComponent,
    ParcelAllComponent,
  ],
  imports: [
    BrowserModule,
    DepotModule,
    SupplierModule,
    AuthModule,
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
  providers: [{provide: APP_BASE_HREF, useValue : '/' },
DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    Depot,
    Parcel,
    Route,
    Supplier,
    SupplierService,
    ParcelService,
    RouteService,
    RouteFormComponent,
    RouteViewComponent,
    RouteListComponent,
    RouteGetComponent,
    AdministratorComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
