import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-car',
  templateUrl: './add-edit-car.component.html',
  styleUrls: ['./add-edit-car.component.css']
})
export class AddEditCarComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private service:SharedService, private formBuilder: FormBuilder) { }

  @Input() emp:any;
  
  CarID:string | undefined;
  CarLP:string | undefined;
  CarType:string| undefined;
  Is4x4:string| undefined;
  EmployeeFirst:string| undefined;
  EngineCapacity:string| undefined
  ManufactureYear:string| undefined;
  Note:string| undefined;
  TreatmentDate:Date| undefined;
  EditDate:Date| undefined;
  TypeList:any=[];
  EmpList:any=[];
  CarLPList:any=[];
  

  ngOnInit(): void {
    this.loadCarList();
    this.registerForm = this.formBuilder.group({
      CarLP: ['', Validators.required],
      CarType: ['', Validators.required],
      Is4x4: ['', Validators.required],
      EmployeeFirst: [''],
      EngineCapacity:[''],
      ManufactureYear:  ['', Validators.required],
      TreatmentDate: ['', Validators.required],
      EditDate:  ['', Validators.required]
  });
  }

  loadCarList() {
    this.service.getAllTypeNames().subscribe((data:any)=>{
      this.TypeList=data;
      this.CarID=this.emp.CarID;
      this.CarLP=this.emp.CarLP;
      this.CarType=this.emp.CarType;
      this.Is4x4=this.emp.Is4x4;
      this.EmployeeFirst=this.emp.EmployeeFirst;
      this.EngineCapacity=this.emp.EngineCapacity;
      this.ManufactureYear=this.emp.ManufactureYear;
      this.Note=this.emp.Note;
      this.TreatmentDate=this.emp.TreatmentDate;
      this.EditDate=this.emp.EditDate;
    })

    this.service.GetAllEmployeeID().subscribe((data:any)=>{
      this.EmpList=data;
    })
  }

  addCar() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
      var val = {CarID:this.CarID,
        CarLP:this.CarLP, CarType:this.CarType, Is4x4:this.Is4x4,
        EmployeeFirst:this.EmployeeFirst,EngineCapacity:this.EngineCapacity, ManufactureYear:this.ManufactureYear,
        Note:this.Note,TreatmentDate:this.TreatmentDate,EditDate:this.EditDate};
      this.service.addCar(val).subscribe(res=> {
        alert(res.toString());
      });
  }

  updateCar() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    var val = {CarID:this.CarID,
      CarLP:this.CarLP, CarType:this.CarType, Is4x4:this.Is4x4,
      EmployeeFirst:this.EmployeeFirst, EngineCapacity:this.EngineCapacity,ManufactureYear:this.ManufactureYear,
      Note:this.Note,TreatmentDate:this.TreatmentDate,EditDate:this.EditDate};
    this.service.updateCar(val).subscribe(res=> {
      alert(res.toString());
  });
  }
}


