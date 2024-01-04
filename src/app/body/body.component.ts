import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  popUpModal:any;
  
  data={
    todoMessage:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  addPlan()
  {
    this.popUpModal=true;
  }
  addPlanMessage()
  {
    console.log(this.data);
    this.popUpModal=false;
  }
}
