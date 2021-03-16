import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarComponent} from './car/car.component';
import {CartypeComponent} from './cartype/cartype.component';
import {EmployeeComponent} from './employee/employee.component';

const routes: Routes = [
 {path:'car',component:CarComponent},
 {path:'cartype',component:CartypeComponent},
 {path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
