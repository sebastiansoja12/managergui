import {Component, OnInit} from '@angular/core';
import {ParcelService} from '../../auth/service/parcel.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Parcel} from '../../auth/model/parcel';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/service/auth.service';
import {ToastrService} from 'ngx-toastr';
import {ParcelTypeDetermination} from '../../auth/model/enumeration/ParcelTypeDetermination';
import {ParcelType} from '../../auth/model/parcelType';


@Component({
  selector: 'app-parcel-add',
  templateUrl: './parcel-add.component.html',
  styleUrls: ['./parcel-add.component.css']
})
export class ParcelAddComponent implements OnInit {


  createParcelForm: FormGroup;
  parcelType: ParcelTypeDetermination[];
  ParcelTypeDetermination = ParcelTypeDetermination;
  enumKeys = [];
  ParcelType2LabelMapping: Record<ParcelTypeDetermination, string> = {
    [ParcelTypeDetermination.TINY]: '5cmx5cm5cm',
    [ParcelTypeDetermination.SMALL]: '10cmx10cmx10cm',
    [ParcelTypeDetermination.AVERAGE]: '50cmx50cmx50cm',
    [ParcelTypeDetermination.BIG]: '80cmx80cmx80cm',
    [ParcelTypeDetermination.MEDIUM]: '30cmx30cmx30cm',
    [ParcelTypeDetermination.CUSTOM]: 'XcmXcmXcm'
  };

  public stateTypes = Object.values(ParcelTypeDetermination).filter(value => typeof value === 'number');

  public parcelTypes = Object.values(ParcelTypeDetermination);

  constructor(
    private parcelService: ParcelService, private parcel: Parcel,
    private router: Router, private authService: AuthService, private toastr: ToastrService) {
    this.enumKeys = Object.keys(this.ParcelTypeDetermination);
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.createParcelForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      senderTelephone: new FormControl('', Validators.required),
      senderEmail: new FormControl('', Validators.required),
      recipientFirstName: new FormControl('', Validators.required),
      recipientLastName: new FormControl('', Validators.required),
      recipientTelephone: new FormControl('', Validators.required),
      recipientCity: new FormControl('', Validators.required),
      recipientStreet: new FormControl('', Validators.required),
      recipientEmail: new FormControl('', Validators.required),
      recipientPostalCode: new FormControl('', Validators.required),
      parcelType: new FormControl('', Validators.required)
    });
  }

  createParcel(): any {
    this.parcel.firstName = this.createParcelForm.get('firstName').value;
    this.parcel.lastName = this.createParcelForm.get('lastName').value;
    this.parcel.senderTelephone = this.createParcelForm.get('senderTelephone').value;
    this.parcel.senderEmail = this.createParcelForm.get('senderEmail').value;
    this.parcel.recipientFirstName = this.createParcelForm.get('recipientFirstName').value;
    this.parcel.recipientLastName = this.createParcelForm.get('recipientLastName').value;
    this.parcel.recipientTelephone = this.createParcelForm.get('recipientTelephone').value;
    this.parcel.recipientCity = this.createParcelForm.get('recipientCity').value;
    this.parcel.recipientStreet = this.createParcelForm.get('recipientStreet').value;
    this.parcel.recipientEmail = this.createParcelForm.get('recipientEmail').value;
    this.parcel.recipientPostalCode = this.createParcelForm.get('recipientPostalCode').value;
    this.parcel.parcelType = 'AVERAGE';
    this.parcelService.save(this.parcel)
      .subscribe(() => {
        this.router.navigateByUrl('/parcel/information/' + this.parcel.id).then(r => 'xd');
      }, error => {
        this.toastr.error('Paczka nie została nadana!');
      });

  }

}