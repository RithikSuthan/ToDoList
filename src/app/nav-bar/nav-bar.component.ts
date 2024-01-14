import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  viewBar:any;
  viewPage:any;
  ngOnInit(): void {
    let val=localStorage.getItem("user");
    if(val)
    {
      this.viewBar=true;
    }
    let page=localStorage.getItem("page");
    if(page)
    {
      this.viewPage=true;
    }
  }

}
