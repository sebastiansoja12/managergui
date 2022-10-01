import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import {DepotService} from '../../service/depot/depot.service';
import {Supplier} from '../../model/supplier';
import {Depot} from '../../model/depot';
import {SupplierService} from '../../service/supplier/supplier.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  constructor(private supplierService: SupplierService, private depotService: DepotService) {
    this.supplier = {
      firstName: '',
      lastName: '',
      telephone: '',
      supplierCode: '',
      depotCode: '',
    };
  }
  isError: boolean;
  createSupplierForm: FormGroup;
  supplier: Supplier;
  depot: Depot[];
  isAdded: boolean;

  ngOnInit(): void {
    this.depotService.findAll().subscribe((data) => this.depot = data);
    this.createSupplierForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      supplierCode: new FormControl('', Validators.required),
      depotCode: new FormControl('', Validators.required)
    });
  }

  createSupplier(): any {
    this.supplier.firstName = this.createSupplierForm.get('firstName').value;
    this.supplier.lastName = this.createSupplierForm.get('lastName').value;
    this.supplier.telephone = this.createSupplierForm.get('telephone').value;
    this.supplier.supplierCode = this.createSupplierForm.get('supplierCode').value;
    this.supplier.depotCode = this.createSupplierForm.get('depotCode').value;

    this.supplierService.saveSupplier(this.supplier).subscribe(data => {
      this.isError = false;
      this.isAdded = true;
    }, error => {
      this.isError = true;
      throwError(error);
    });

    this.createSupplierForm.reset();
  }

}
