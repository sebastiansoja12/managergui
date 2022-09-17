import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {TokenInterceptor} from './token-interceptor';
import {HomeComponent} from './home/home.component';
import {RouteService} from './services/route/route-service.service';
import {Route} from './services/model/route';
import {APP_BASE_HREF, DatePipe} from '@angular/common';
import {AdministratorComponent} from './administrator/administrator.component';
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
import {HeaderComponent} from './header/component/header.component';
import {FooterComponent} from './footer/footer.component';
import {SupplierService} from './services/supplier/supplier.service';
import {Supplier} from './services/model/supplier';
import {DepotModule} from './depots/depot.module';
import {SupplierModule} from './suppliers/supplier.module';
import {AuthModule} from './auth/auth.module';
import {RouteModule} from './routes/route.module';
import {RerouteModule} from './reroutes/reroute.module';
import {ParcelModule} from './parcels/parcel.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministratorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    DepotModule,
    SupplierModule,
    AuthModule,
    RouteModule,
    RerouteModule,
    ParcelModule,
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
    Route,
    Supplier,
    SupplierService,
    RouteService,
    AdministratorComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
