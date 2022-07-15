import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule   } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  imports: [MatButtonModule, MatListModule,MatInputModule,MatIconModule,MatSnackBarModule,MatDatepickerModule, MatCheckboxModule,MatRadioModule,MatFormFieldModule ],
  exports:[MatButtonModule, MatListModule,MatInputModule,MatIconModule,MatSnackBarModule,MatDatepickerModule,MatCheckboxModule,MatRadioModule,MatFormFieldModule],
})
export class MaterialModule { }
