import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-deleted-customers',
  templateUrl: './deleted-customers.component.html',
  styleUrls: ['./deleted-customers.component.scss']
})
export class DeletedCustomersComponent implements OnInit {
  deletedCustomerdArray: Customer[] = []

  constructor(public customerService:CustomerService) { }

  ngOnInit(): void {
    this.deletedCustomerdArray = this.customerService.deletedCustomerdArray;
  }
  restoreCustomer(index:number){
    this.customerService.restoreCustomer(index);
  }
}
