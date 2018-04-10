import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(){
  }
  title = 'app';
  tasks = [];
  constructor(private _httpService: HttpService){}
  ngOnInIt(){
    this.getTasksFromService()
  }

  getTasksFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data['tasks'];
    })
  }
}
