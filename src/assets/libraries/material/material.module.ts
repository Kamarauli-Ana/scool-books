import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  imports: [MatButtonModule, MatListModule,MatInputModule,MatIconModule,MatSnackBarModule ],
  exports:[MatButtonModule, MatListModule,MatInputModule,MatIconModule,MatSnackBarModule ],
})
export class MaterialModule { }
