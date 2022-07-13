import { Customer } from "../models/customer.model";

export class CustomerService {
  customersArray: Customer[] = [
    {
      name:"Maxim",
      surname: "Bebe",
      age: 26,
      email: "Max@gmail.com"
    },
    {
      name:"Emili",
      surname: "Doe",
      age: 25,
      email: "Emili@gmail.com"
    },
    {
      name:"John",
      surname: "Keil",
      age: 32,
      email: "John@gmail.com"
    },
    {
      name:"Elisabet",
      surname: "Smidt",
      age: 18,
      email: "Elisabet@gmail.com"
    },
  ]
  deletedCustomerdArray:Customer[] = [];
  constructor() { }

  resetDeleted(){
    this.deletedCustomerdArray = [];
  }

  restoreCustomer(index:number){
    this.customersArray.push(this.deletedCustomerdArray[index]);
    this.deletedCustomerdArray.splice(index,1)
   }
}
