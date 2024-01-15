import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoserviceService } from 'services/todoservice.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  viewLogin:any;
  data={
    emailId:'',
    password:''
  }
  constructor(private service:TodoserviceService,private router :Router,private nav:NavBarComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
    }, 1000);
    localStorage.removeItem("userId");
    localStorage.removeItem("page");
    this.viewLogin=true;
  }

  ngOnDestroy()
  {
    this.viewLogin=false;
  }
  loginUser()
  {
    // console.log(this.data);
    this.service.validUser(this.data).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response && response.status === 'success') {
          console.log('User added successfully:', response.message);
          localStorage.setItem("user",this.data.emailId);
          localStorage.setItem("page","home");
          this.nav.ngOnInit();
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
