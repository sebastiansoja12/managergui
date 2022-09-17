import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Route} from '../../model/route';
import {RouteService} from '../../service/route/route-service.service';


@Component({
  selector: 'app-depot-form',
  templateUrl: './route-form.component.html',
  styleUrls: ['./route-form.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RouteFormComponent implements OnInit {

  routes: Array<Route>;
  parcelFindForm: FormGroup;
  dss: string;
  id: string;
  focus;
  @Output() parseParcelId: EventEmitter<string> = new EventEmitter();

  isError: boolean;
  message: string;


  constructor(private routeService: RouteService, private router: Router) {
  }

  ngOnInit(): any {
    this.parcelFindForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
  }

  findParcel(): any {
   this.id = this.parcelFindForm.get('id').value;
   this.router.navigateByUrl('/route/parcelCode/' + this.id);
  }
}
