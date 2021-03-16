import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartypeComponent } from './cartype/cartype.component';
import { ShowTypeComponent } from './cartype/show-type/show-type.component';
import { AddEditTypeComponent } from './cartype/add-edit-type/add-edit-type.component';
import { CarComponent } from './car/car.component';
import { ShowCarComponent } from './car/show-car/show-car.component';
import { AddEditCarComponent } from './car/add-edit-car/add-edit-car.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CartypeComponent,
    ShowTypeComponent,
    AddEditTypeComponent,
    CarComponent,
    ShowCarComponent,
    AddEditCarComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
