import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/assets/libraries/material/material.module';

import { CustomDirective } from './custom.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCustomerPipe } from './search-customer.pipe';
import { ActiveCustomersComponent } from './customer/active-customers/active-customers.component';
import { DeletedCustomersComponent } from './customer/deleted-customers/deleted-customers.component';
import { CustomerService } from './customer/services/customer.service';
import { PostListComponent } from './posts/post-list/post-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';
import { RegistrationComponent } from './registration/registration.component';
import { MatDatepickerModule  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  declarations: [AppComponent, CustomDirective, SearchCustomerPipe, ActiveCustomersComponent, DeletedCustomersComponent, PostListComponent, RegistrationComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule,FormsModule, HttpClientModule, ReactiveFormsModule,MatNativeDateModule],
  exports:[CustomDirective],
  providers: [{provide: CustomerService, useClass: CustomerService},
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
