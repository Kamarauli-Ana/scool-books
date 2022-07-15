import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  gender:string = ''
  checked = false;
  constructor() {
    this.registrationForm = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(null),
      // gender: new FormControl('female')
      // agrement:new FormControl(false),
    })
  }

  ngOnInit(): void {
  }

}
