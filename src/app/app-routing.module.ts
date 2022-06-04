import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {RouteListComponent} from './routes/route-list/route-list.component';
import {RouteViewComponent} from './routes/route-view/route-view.component';
import {RouteFormComponent} from './routes/route-find/route-form.component';
import {ParcelAddComponent} from './parcels/parcel-add/parcel-add.component';
import {RouteGetComponent} from './routes/route-get/route-get.component';
import {RouteDeleteComponent} from './routes/route-delete/route-delete.component';
import {UserProfileComponent} from './auth/user-profile/user-profile.component';
import {DepotAllComponent} from './depot-all/depot-all.component';
import {AdministratorComponent} from './administrator/administrator.component';
import {IndexComponent} from './pages/index/index.component';
import {ProfilepageComponent} from './pages/examples/profilepage/profilepage.component';
import {RegisterpageComponent} from './pages/examples/registerpage/registerpage.component';
import {LandingpageComponent} from './pages/examples/landingpage/landingpage.component';
import {ParcelInfoComponent} from './parcels/parcel-info/parcel-info.component';
import {ClientParcelComponent} from './parcels/client-parcel/client-parcel.component';

const routes: Routes = [
  {path: '', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfilepageComponent},
  {path: 'register', component: RegisterpageComponent},
  {path: 'landing', component: LandingpageComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'routes', component: RouteListComponent},
  {path: 'route/parcelCode/:id', component: RouteViewComponent},
  {path: 'route-find', component: RouteFormComponent},
  {path: 'parcel/add', component: ParcelAddComponent},
  {path: 'route-create', component: RouteGetComponent},
  {path: 'route-delete', component: RouteDeleteComponent},
  {path: 'user/profile', component: UserProfileComponent},
  {path: 'depots', component: DepotAllComponent},
  {path: 'admin/:id', component: AdministratorComponent},
  {path: 'test', component: IndexComponent},
  {path: 'parcel/information/:id', component: ParcelInfoComponent},
  {path: 'parcel/client/management/:id', component: ClientParcelComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
