import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
    // this.getTasks();
  }

getTasks() {
  // let tempObservable = this._http.get('/tasks'); //provide the url to where we want it to go
  // tempObservable.subscribe(data => console.log("Got our tasks!", data));
  return this._http.get('/tasks') //this will deliver observable to app component
}
}