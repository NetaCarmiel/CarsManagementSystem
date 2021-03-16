import { Component, OnInit , Input} from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-type',
  templateUrl: './add-edit-type.component.html',
  styleUrls: ['./add-edit-type.component.css']
})
export class AddEditTypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  TypeID:string="";
  CarType:string="";
  ngOnInit(): void {
    this.TypeID=this.dep.TypeID;
    this.CarType=this.CarType;
  }

  addType() {
      var val = {TypeID:this.TypeID,
        CarType:this.CarType};
      this.service.addType(val).subscribe(res=> {
        alert(res.toString());
      });
  }

  updateType() {
    var val = {TypeID:this.TypeID,
      CarType:this.CarType};
    this.service.updateType(val).subscribe(res=> {
      alert(res.toString());
  });
  }

}
