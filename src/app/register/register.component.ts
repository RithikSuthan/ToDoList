import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from 'services/todoservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  viewLogin:any;
  data={
    emailId:'',
    password:''
  }
  constructor(private service:TodoserviceService,private router :Router) { }

  ngOnInit(): void {
    localStorage.removeItem("userId");
    this.viewLogin=true;
  }
  registerUser() {
    console.log(this.data);
    this.service.addNewUser(this.data).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response && response.status === 'success') {
          console.log('User added successfully:', response.message);
          alert('User added successfully');
          this.router.navigate(['/', 'login'])
        } else {
          console.error('Error:', response.message);
          alert(response.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
  
        if (error instanceof HttpErrorResponse && error.status === 409) {
          console.log('User already exists:', error.error.message);
          alert('User already exists: ' + error.error.message);
        } else {
          console.error('Unexpected error:', error.message);
          alert('Unexpected error occurred');
        }
      }
    );
  }
  
  
}
