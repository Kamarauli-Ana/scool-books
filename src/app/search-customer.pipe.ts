import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCustomer',
   pure: false,
})
export class SearchCustomerPipe implements PipeTransform {

  transform(value: {name: string, surname:string, age:number}[], searchValue: string ):
  {name: string, surname:string, age:number}[] {
   if (searchValue === ''){
    return value;
   }
   return value.filter((customer) => customer.name.includes(searchValue));
  }
}
