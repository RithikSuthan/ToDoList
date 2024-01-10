import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from 'services/todoservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  data={
    emailId:'',
    password:''
  }
  constructor(private service:TodoserviceService) { }

  ngOnInit(): void {
    localStorage.removeItem("userId");
  }
  registerUser()
  {
    console.log(this.data);
    this.service.addNewUser(this.data).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response && response.status === 'success') {
          console.log('User added successfully:', response.message);
        } else {
          console.error('Error:', response.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
  
}
