import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-car',
  templateUrl: './show-car.component.html',
  styleUrls: ['./show-car.component.css']
})
export class ShowCarComponent implements OnInit {
  constructor(private service:SharedService ) {}

  CarList:any=[];
  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  
  CarLPFilter:string="";
  CarTypeFilter:string="";
  CarListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp= {
    CarID:0,
    }
    this.ModalTitle="Add Car";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item:any) {
      this.emp=item;
      this.ModalTitle="Edit Car";
      this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any) {
    if (confirm('Are you sure?')) {
      this.service.deleteCar(item.CarID).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList() {
    this.service.getCarList().subscribe(data=>{
      this.CarList=data;
      this.CarListWithoutFilter=data;
    });
  }

  filterFn() {
    var CarLPFilter= this.CarLPFilter;
    var CarTypeFilter= this.CarTypeFilter;


    this.CarList = this.CarListWithoutFilter.filter(function (el: { CarLP: { toString: () => string; }; CarType: { toString: () => string; }; }){
      return el.CarLP.toString().toLowerCase().includes(
        CarLPFilter.toString().trim().toLowerCase())
        &&
      el.CarType.toString().toLowerCase().includes(
       CarTypeFilter.toString().trim().toLowerCase())
      });
  }


}
