import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:5000/api";
  constructor(private http:HttpClient) { }

  // CarType API

  getTypeList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/CAR_TYPE');
  }

  addType(val:any) {
    return this.http.post(this.APIUrl+'/CAR_TYPE',val);
  }

  updateType(val:any) {
    return this.http.put(this.APIUrl+'/CAR_TYPE',val);
  }

  deleteType(val:any) {
    return this.http.delete(this.APIUrl+'/CAR_TYPE/' + val);
  }

   // Car API

  getCarList():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/CAR');
  }

  addCar(val:any) {
    return this.http.post(this.APIUrl+'/CAR',val);
  }

  updateCar(val:any) {
    return this.http.put(this.APIUrl+'/CAR',val);
  }

  deleteCar(val:any) {
    return this.http.delete(this.APIUrl+'/CAR/' + val);
  }

  getAllTypeNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/CAR/GetAllTypeNames');
  }

  GetAllEmployeeID():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/CAR/GetAllEmployeeID');
  }

  GetAllCarLP():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/CAR/GetAllCarLP');
  }

  // Employee API

  getEmp():Observable<any[]> {
    return this.http.get<any>(this.APIUrl+'/employee');
  }

  addEmp(val:any) {
    return this.http.post(this.APIUrl+'/employee',val);
  }

  updateEmp(val:any) {
    return this.http.put(this.APIUrl+'/employee',val);
  }

  deleteEmp(val:any) {
    return this.http.delete(this.APIUrl+'/employee/' + val);
  }


}
