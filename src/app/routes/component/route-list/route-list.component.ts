import { Component, OnInit } from '@angular/core';
import {Route} from '../../../services/model/route';
import { RouteService} from '../../../services/route/route-service.service';
import {User} from '../../../services/model/user';
import {AuthService} from '../../../services/auth/auth.service';


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
