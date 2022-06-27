import {Component, EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {Route} from '../../auth/model/route';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteService} from '../../auth/service/route-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from 'ngx-webstorage';


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


  constructor(private routeService: RouteService, private router: Router,
              private toastr: ToastrService, private localStorage: LocalStorageService,
              private activatedRoute: ActivatedRoute) {
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
