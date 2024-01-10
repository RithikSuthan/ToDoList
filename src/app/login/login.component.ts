import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from 'services/todoservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data={
    emailId:'',
    password:''
  }
  constructor(private service:TodoserviceService,private router :Router) { }

  ngOnInit(): void {
  }

  
  loginUser()
  {
    console.log(this.data);
    this.service.validUser(this.data).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response && response.status === 'success') {
          console.log('User added successfully:', response.message);
          this.router.navigate(['/', 'home'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
        }
         else {
          console.error('Error:', response.message);
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }

}
