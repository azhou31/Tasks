import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[]; //tasks variable and set it to Task array
  shownTasks: Task[];
  searchString: string="";
  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    let observable = this._taskService.retrieveTasks();
      observable.subscribe( (res) => {
        const tasks = res.json();
        this.tasks=tasks;
      });
  }
searchTasks(){
  this.shownTasks = this.tasks.filter((tasks) =>{
    console.log(tasks.title.includes(this.searchString) || tasks.description.includes(this.searchString));
    return tasks.title.toLowerCase().includes(this.searchString) || tasks.description.toLowerCase().includes(this.searchString);
  })
}
updateTasks(shownTasks){
  console.log("updated tasksss");
  let observable = this._taskService.updateTasks(shownTasks);
  observable.subscribe(data => {
    console.log("updated data", data);
  })
}

deleteTasks(){

}

}
