import { Component, OnInit,NgModule } from '@angular/core';
import { TodoserviceService } from 'services/todoservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  popUpModal:any;
  
  data={
    plan:''
  }
  constructor(private service:TodoserviceService) { }

  rowData: { taskNo:string, plan: string, status: boolean }[] = [];


  async ngOnInit() {
    await this.loadData();
    console.log(this.rowData);
  }

  async loadData()
  {
    this.service.getAllPlans().subscribe(
      (response) => {
        console.log('API Response:', response);
        this.rowData=response;
        if (response && response.status === 'success') {
          console.log('Data added successfully:', response.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
    console.log(this.rowData);
  }
  addPlan()
  {
    this.popUpModal=true;
  }
  addPlanMessage() {
    console.log(this.data);
    this.popUpModal = false;
    
    this.service.addNewPlan(this.data).subscribe(
      (response) => {
        // handle success
        console.log('API Response:', response);
        
        // Check the status from the API response
        if (response && response.status === 'success') {
          // Success case
          console.log('Data added successfully:', response.message);
          // You can perform any additional actions here
        } else {
          // Error case
          console.error('Error:', response.message);
          // You can show an error message to the user or take other actions
        }
      },
      (error) => {
        // handle error
        console.error('API Error:', error);
        // You can show an error message to the user or take other actions
      }
    );
  }
  clickedCheckBox(i: any, taskNo: any) {
    this.service.changeStatus(taskNo).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response && response.status === 'success') {
          console.log('Status Modified successfully:', response.message);
        } else {
          console.error('Error:', response?.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
    setTimeout(() => {
    }, 1000);
  }
  
}
