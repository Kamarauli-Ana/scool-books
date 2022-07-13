import {Component, OnInit,HostBinding} from '@angular/core';
import { trigger, state,style,transition,animate } from '@angular/animations';
import { StyleManagerService } from './style-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  isDark = this.styleManager.isDark;
  isVisible: boolean = false;
  searchField: string = '';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }


  customerList: {name: string, surname:string, age:number}[] = [
    {
      name:'Joni',
      surname:'smidti',
      age: 20,
    },
    {
      name:'Adam',
      surname:'Eminye',
      age: 25,
    },
    {
      name:'Nikola',
      surname:'Adams',
      age: 18,
    },
    {
      name:'Noah',
      surname:'Jeferson',
      age: 35,
    }
  ]


  constructor(private styleManager: StyleManagerService){}

  ngOnInit() {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

  toggleCustomers(){
    this.isVisible = !this.isVisible
  }

  addCustomers(){
    this.customerList = [...this.customerList,{
      name:'Jane',
      surname:'Braian',
      age: 30,
    }]
  }


}
