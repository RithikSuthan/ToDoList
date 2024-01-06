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

  ngOnInit(): void {
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
  
}
