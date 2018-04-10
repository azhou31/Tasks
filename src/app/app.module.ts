import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

//SERVICES
import { TaskService } from './task/task.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskListComponent } from './task/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskNewComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
