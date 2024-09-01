import { Routes } from '@angular/router';
import { GetForTicketComponent } from './customer/components/get-for-ticket/get-for-ticket.component';

export const routes: Routes = [  {path: 'newTicket/:Id', component: GetForTicketComponent},
    {path:"**",redirectTo:"newTicket",pathMatch:"full"}
];
