import {Component, EventEmitter, OnInit, Output, OnDestroy} from '@angular/core';
import {throwError} from 'rxjs';
import {Route} from '../services/model/route';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RouteService} from '../services/route/route-service.service';
import noUiSlider from 'nouislider';
import {Router} from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  routes: Array<Route>;
  parcelFindForm: FormGroup;
  dss: string;
  id: number;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  @Output() parseParcelId: EventEmitter<string> = new EventEmitter();
  isError: boolean;
  message: string;
  constructor(private routeService: RouteService, private router: Router) {}
  ngOnInit(): any {
    this.parcelFindForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');

    const slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    const slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }

  findParcel(): any {
    this.id = this.parcelFindForm.get('id').value;
    this.router.navigateByUrl('/route/parcelCode/' + this.id);
    this.routeService.getAllRoutesByParcelId(this.id).subscribe(data => {
      this.routes = data;
      this.isError = false;
    }, error => {
      this.isError = true;
      throwError(error);
      this.message = 'Paczka o id: ' +  this.id + ' nie została znaleziona.\n' +
        'Sprawdź numer swojej przesyłki i spróbuj ponownie';
    });
  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}
