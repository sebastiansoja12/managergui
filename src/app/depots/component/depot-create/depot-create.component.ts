import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Depot} from '../../../suppliers/model/depot';
import {throwError} from 'rxjs';
import {DepotService} from '../../service/depot/depot.service';

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

  constructor(private depotService: DepotService) {
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
    this.depotService.saveDepot(this.depot).subscribe(data => {
      this.isError = false;
      this.isAdded = true;
    }, error => {
      this.isError = true;
      throwError(error);
    });

    this.createDepotForm.reset();
  }


}
