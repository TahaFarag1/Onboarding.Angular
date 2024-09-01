import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerModule } from './customer/customer.module';
import { CustomerService } from './customer/Service/customer.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CustomerModule,HttpClientModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'customer-info-app';
}
