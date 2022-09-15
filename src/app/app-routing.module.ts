import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/component/signup/signup.component';
import {LoginComponent} from './auth/component/login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteListComponent} from './routes/component/route-list/route-list.component';
import {RouteViewComponent} from './routes/component/route-view/route-view.component';
import {RouteFormComponent} from './routes/component/route-find/route-form.component';
import {ParcelAddComponent} from './parcels/component/parcel-add/parcel-add.component';
import {RouteGetComponent} from './routes/component/route-get/route-get.component';
import {UserProfileComponent} from './auth/component/user-profile/user-profile.component';
import {DepotAllComponent} from './depots/component/depot-all/depot-all.component';
import {AdministratorComponent} from './administrator/administrator.component';
import {ParcelInfoComponent} from './parcels/component/parcel-info/parcel-info.component';
import {ClientParcelComponent} from './parcels/component/client-parcel/client-parcel.component';
import {AuthGuard} from './auth/guard/auth.guard';
import {NotAuthGuard} from './auth/guard/not.auth.guard';
import {AdminGuard} from './auth/guard/admin.guard';
import {RerouteCreateComponent} from './reroutes/component/reroute-create/reroute-create.component';
import {RerouteEditComponent} from './reroutes/component/reroute-edit/reroute-edit.component';
import {RerouteGetComponent} from './reroutes/component/reroute-get/reroute-get.component';
import {ParcelAllComponent} from './parcels/component/parcel-all/parcel-all.component';
import {SupplierAddComponent} from './suppliers/component/supplier-add/supplier-add.component';
import {SupplierAllComponent} from './suppliers/component/supplier-all/supplier-all.component';
import {SupplierViewComponent} from './suppliers/component/supplier-view/supplier-view.component';
import {DepotViewComponent} from './depots/component/depot-view/depot-view.component';
import {DepotCreateComponent} from './depots/component/depot-create/depot-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  {path: 'routes', component: RouteListComponent, canActivate: [AuthGuard]},
  {path: 'route/parcelCode/:id', component: RouteViewComponent},
  {path: 'route-find', component: RouteFormComponent},
  {path: 'reroute-create', component: RerouteCreateComponent},
  {path: 'reroute-edit/:id/:token', component: RerouteEditComponent},
  {path: 'reroute-get', component: RerouteGetComponent},
  {path: 'parcel/add', component: ParcelAddComponent},
  {path: 'parcels', component: ParcelAllComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'route-create', component: RouteGetComponent, canActivate: [AuthGuard]},
  {path: 'user/profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'depots', component: DepotAllComponent},
  {path: 'depot/create', component: DepotCreateComponent},
  {path: 'admin/routes/:id', component: AdministratorComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'parcel/information/:id', component: ParcelInfoComponent},
  {path: 'parcel/client/management/:id', component: ClientParcelComponent},
  {path: 'supplier/create', component: SupplierAddComponent},
  {path: 'supplier/:id', component: SupplierViewComponent},
  {path: 'suppliers', component: SupplierAllComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })]})
export class AppRoutingModule {
}
