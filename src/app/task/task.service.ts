import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Task } from './task';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  constructor(private _http: Http) {}
  updateTasks(shownTasks){
    return this._http.put("/task/'+shownTasks._id'", shownTasks);
  }

  retrieveTasks(){
    return this._http.get('/task');
  }
    // getTasks(){
    //   return this._http.get('/task').map(Response=>Response.json()).toPromise();
    // }

  //create a task method
    create(Task){
      return this._http.post('/task', Task);
    }

}
