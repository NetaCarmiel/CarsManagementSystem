import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-type',
  templateUrl: './show-type.component.html',
  styleUrls: ['./show-type.component.css']
})
export class ShowTypeComponent implements OnInit {

  constructor(private service:SharedService) { }

  TypeList:any=[];
  ModalTitle:string="";
  ActivateAddEditTypeComp:boolean=false;
  dep:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick() {
    this.dep= {
      TypeID:0,
      CarType:""
    }
    this.ModalTitle="Add Type";
    this.ActivateAddEditTypeComp=true;
  }

  closeClick() {
    this.ActivateAddEditTypeComp = false;
    this.refreshDepList();
  }

  editClick(item:any) {
      this.dep=item;
      this.ModalTitle="Edit Type";
      this.ActivateAddEditTypeComp=true;
  }

  deleteClick(item:any) {
    if (confirm('Are you sure?')) {
      this.service.deleteType(item.TypeID).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  refreshDepList() {
    this.service.getTypeList().subscribe(data=>{
      this.TypeList=data;
    });
  }

}
