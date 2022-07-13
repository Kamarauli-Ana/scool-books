import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  imports: [MatButtonModule, MatListModule,MatInputModule,MatIconModule ],
  exports:[MatButtonModule, MatListModule,MatInputModule,MatIconModule ],
})
export class MaterialModule { }
