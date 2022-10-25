import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Depot} from '../../../suppliers/model/depot';
import {DepotService} from '../../service/depot/depot.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-depot-create',
  templateUrl: './depot-create.component.html',
  styleUrls: ['./depot-create.component.css']
})
export class DepotCreateComponent implements OnInit {

  isError: boolean;
  createDepotForm: FormGroup;
  isAdded: boolean;
  depot: Depot;
  depotList: Array<Depot>;

  constructor(private depotService: DepotService) {
    this.depotList = new Array<Depot>();
    this.depot = {
      id: null,
      city: '',
      street: '',
      country: '',
      depotCode: '',
    };
  }

  ngOnInit(): void {
    this.createDepotForm = new FormGroup({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      depotCode: new FormControl('', Validators.required)
    });
  }

  createDepot(): any {
    this.depot.city = this.createDepotForm.get('city').value;
    this.depot.street = this.createDepotForm.get('street').value;
    this.depot.country = this.createDepotForm.get('country').value;
    this.depot.depotCode = this.createDepotForm.get('depotCode').value;
    this.depotList.push(this.depot);
    this.depotService.saveDepot(this.depotList).subscribe(data => {
      this.isError = false;
      this.isAdded = true;
    }, error => {
      this.isError = true;
      throwError(error);
    });

    this.createDepotForm.reset();
  }


}
