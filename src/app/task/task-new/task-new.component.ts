import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  task: Task;

  constructor(private _taskService: TaskService) { 
  }
  
  ngOnInit() {
    this.task = new Task();
  }

  onSubmit(){
    console.log("Added new task!");
    let observable = this._taskService.create(this.task);
    observable.subscribe( (res) => {
      this.task = new Task(); //this clears out the field boxes after submitting data
      const task = res.json();
      console.log(task);
    })
  }

}
