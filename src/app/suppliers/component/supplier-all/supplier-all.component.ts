import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../service/supplier/supplier.service';
import {Supplier} from '../../model/supplier';

@Component({
  selector: 'app-supplier-all',
  templateUrl: './supplier-all.component.html',
  styleUrls: ['./supplier-all.component.css']
})
export class SupplierAllComponent implements OnInit {

  constructor(private supplierService: SupplierService) { }

  suppliers: Supplier[];

  ngOnInit(): void {
    this.supplierService.findAll().subscribe(data => {
      this.suppliers = data;
    });
  }

}
