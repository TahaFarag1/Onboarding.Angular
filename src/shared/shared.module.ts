import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './components/alerts/error-alert/error-alert.component';
import { SuccessAlertComponent } from './components/alerts/success-alert/success-alert.component';
import { SuccessModelComponent } from './components/success-model/success-model.component';
import { LoaderComponent } from './components/loader/loader.component';



@NgModule({
  declarations: [
    ErrorAlertComponent,
    SuccessAlertComponent,
    SuccessModelComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorAlertComponent,
    SuccessAlertComponent,
    SuccessModelComponent,
    LoaderComponent
  ]

})
export class SharedModule { }
