import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  EmployeeID:string="";
  EmployeeFirst:string="";
  EmployeeLast:string="";
  ngOnInit(): void {
    this.EmployeeID=this.dep.EmployeeID;
    this.EmployeeFirst=this.EmployeeFirst;
    this.EmployeeLast=this.dep.EmployeeLast;
  }


  addEmployee() {
      var val = {EmployeeID:this.EmployeeID,
        EmployeeFirst:this.EmployeeFirst, EmployeeLast:this.EmployeeLast};
      this.service.addEmp(val).subscribe(res=> {
        alert(res.toString());
      });
  }

  updateEmployee() {
    var val = {EmployeeID:this.EmployeeID,
      EmployeeFirst:this.EmployeeFirst, EmployeeLast:this.EmployeeLast};
    this.service.updateEmp(val).subscribe(res=> {
      alert(res.toString());
  });
  }

}

