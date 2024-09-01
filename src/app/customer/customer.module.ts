import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetForTicketComponent } from './components/get-for-ticket/get-for-ticket.component';
import { FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from './Service/customer.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    GetForTicketComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  // providers: [
  //   CustomerService
  // ],
})
export class CustomerModule { }
