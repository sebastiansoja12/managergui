import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/service/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  username: string;
  role: string;
  isNull: boolean;
  isAdmin: boolean;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  isError: boolean;
  firstName: string;
  parcelFindForm: FormGroup;
  parcelId: string;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit(): any {
    this.parcelFindForm = new FormGroup({
      id: new FormControl('', Validators.required)
    });
    this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
    this.authService.username.subscribe((data: string) => this.username = data);
    this.authService.role.subscribe((data: string) => this.role = data);
    this.authService.admin.subscribe( (data: boolean) => this.isAdmin = data);
    this.isNull = this.authService.isNull();
    this.isLoggedIn = this.authService.isLoggedIn();
    this.isAdmin = this.authService.isAdmin();
    this.username = this.authService.getUserName();
    this.firstName = this.authService.getFirstName();
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/home');
  }

  findParcel(): any {
    this.parcelId = this.parcelFindForm.get('id').value;
    this.router.navigateByUrl('/route/parcelCode/' + this.parcelId);
    this.parcelFindForm.reset();
  }





  @HostListener('document:mousemove', ['$event'])
  // tslint:disable-next-line:typedef
  onMouseMove(e)
  {
    const squares1 = document.getElementById('square1');
    const squares2 = document.getElementById('square2');
    const squares3 = document.getElementById('square3');
    const squares4 = document.getElementById('square4');
    const squares5 = document.getElementById('square5');
    const squares6 = document.getElementById('square6');
    const squares7 = document.getElementById('square7');
    const squares8 = document.getElementById('square8');

    const posX = e.clientX - window.innerWidth / 2;
    const posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares2.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares3.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares4.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares5.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares6.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.05 +
      'deg) rotateX(' +
      posY * -0.05 +
      'deg)';
    squares7.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.02 +
      'deg) rotateX(' +
      posY * -0.02 +
      'deg)';
    squares8.style.transform =
      'perspective(500px) rotateY(' +
      posX * 0.02 +
      'deg) rotateX(' +
      posY * -0.02 +
      'deg)';
  }
}
