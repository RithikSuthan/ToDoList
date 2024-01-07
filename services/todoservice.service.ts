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

  register_service_url:any;
  constructor(private http:HttpClient) {
    this.register_service_url = environment.register_service_url;
   }

   addNewPlan(postObj: any) {
    const endpoint = this.register_service_url + EndPoints.ADD_NEW_PLAN;
    return this.http.put<any>(endpoint, postObj);
  }

  getAllPlans()
  {
    const endpoint = this.register_service_url + EndPoints.GET_PLANS;
    return this.http.get<any>(endpoint);
  }

  changeStatus(taskNo: any) {
    const endpoint = this.register_service_url + EndPoints.UPDATE_STATUS+ '?taskNo=' + taskNo;
    return this.http.patch<any>(endpoint, null);
  }

  deleteTask(taskNo:any)
  {
    const endpoint = this.register_service_url + EndPoints.DELETE_TASK+ '?taskNo=' + taskNo;
    return this.http.delete<any>(endpoint);
  }
  editTask(taskNo:any,newPlan:any)
  {
    const endpoint = this.register_service_url + EndPoints.EDIT_TASK+ '?taskNo=' + taskNo+'&newPlan='+newPlan;
    return this.http.patch<any>(endpoint,null);
  }
  

}
