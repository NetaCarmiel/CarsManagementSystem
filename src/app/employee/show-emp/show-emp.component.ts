import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmpList:any=[];
  ModalTitle:string="";
  ActivateAddEditEmpComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.dep= {
      EmployeeID:0,
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item:any) {
      this.dep=item;
      this.ModalTitle="Edit Employee";
      this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item:any) {
    if (confirm('Are you sure?')) {
      this.service.deleteEmp(item.EmployeeID).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList() {
    this.service.getEmp().subscribe(data=>{
      this.EmpList=data;
    });
  }

}



