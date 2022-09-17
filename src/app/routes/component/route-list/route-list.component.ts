import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {Route} from '../../model/route';
import {RouteService} from '../../service/route/route-service.service';
import {AuthService} from '../../../auth/service/auth/auth.service';


@Component({
  selector: 'app-depot-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  routes: Route[];
  depotcode: string;
  users: User[];
  username: string;

  constructor(private routeService: RouteService, private authService: AuthService) {
  }

  // tslint:disable-next-line:typedef
  firstName: string;

  ngOnInit(): any {
    this.routeService.findAll().subscribe(data => {
      this.routes = data;
    });
    this.username = this.authService.getUserName();
    this.firstName = this.authService.getFirstName();
  }
  deleteRouteByParcelId(id: number): any{
    this.routeService.deleteRouteByParcelId(id).subscribe(data => {
      this.routes = data;
    });
    window.location.reload();
  }
}
