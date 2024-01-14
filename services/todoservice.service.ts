import { Injectable } from '@angular/core';
import { EndPoints } from 'Constants/Endpoints';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {

  userId:any;
  register_service_url:any;
  constructor(private http:HttpClient) {
    this.register_service_url = environment.register_service_url;
   }

   loadLocalStorage()
   {
    this.userId=localStorage.getItem("user");
   }
   addNewPlan(postObj: any) {
    this.loadLocalStorage();
        const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'user' : this.userId
    });
    console.log(this.userId);
    const endpoint = this.register_service_url + EndPoints.ADD_NEW_PLAN;
    return this.http.put<any>(endpoint, postObj,{headers: headers});
  }

  getAllPlans()
  {
    this.loadLocalStorage();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'user' : this.userId
    });
    console.log(this.userId);
    const endpoint = this.register_service_url + EndPoints.GET_PLANS;
    return this.http.get<any>(endpoint,{headers: headers});
  }

  changeStatus(taskNo: any) {
    this.loadLocalStorage();
    const endpoint = this.register_service_url + EndPoints.UPDATE_STATUS+ '?taskNo=' + taskNo;
    return this.http.patch<any>(endpoint, null);
  }

  deleteTask(taskNo:any)
  {
    this.loadLocalStorage();
    const endpoint = this.register_service_url + EndPoints.DELETE_TASK+ '?taskNo=' + taskNo;
    return this.http.delete<any>(endpoint);
  }
  editTask(taskNo:any,newPlan:any)
  {
    this.loadLocalStorage();
    const endpoint = this.register_service_url + EndPoints.EDIT_TASK+ '?taskNo=' + taskNo+'&newPlan='+newPlan;
    return this.http.patch<any>(endpoint,null);
  }
  addNewUser(postObj: any) {
    this.loadLocalStorage();
    const endpoint = this.register_service_url + EndPoints.NEW_USER_REGISTER;
    return this.http.put<any>(endpoint, postObj);
  }  
  validUser(postObj: any) {
    this.loadLocalStorage();
    const endpoint = this.register_service_url + EndPoints.VALID_USER_LOGIN;
    return this.http.post<any>(endpoint, postObj);
  }

}
