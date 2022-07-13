import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-active-customers',
  templateUrl: './active-customers.component.html',
  styleUrls: ['./active-customers.component.scss']
})
export class ActiveCustomersComponent implements OnInit {

  customersArray: Customer[] = [];
  deletedCustomerdArray:Customer[] = [];

  constructor(public customerService: CustomerService) { }

  ngOnInit(): void {
    this.customersArray = this.customerService.customersArray;
    this.deletedCustomerdArray = this.customerService.deletedCustomerdArray;

  }

  deleteCustomer(index:number){
    this.customerService.deletedCustomerdArray = [
      ...this.customerService.deletedCustomerdArray,
      ...this.customerService.customersArray.splice(index, 1),
    ]
  }

  resetCustomers(){
    this.customerService.customersArray = [
      ...this.customerService.customersArray,
      ...this.customerService.deletedCustomerdArray,
    ];
    this.customerService.deletedCustomerdArray = [];
  }

}
