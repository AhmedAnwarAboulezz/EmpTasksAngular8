import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TaskListComponent } from "./task-list/task-list.component";
import { CreateTaskComponent } from './create-task/create-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [TaskListComponent, CreateTaskComponent, UpdateTaskComponent, TaskDetailsComponent, DeleteTaskComponent],
  imports: [CommonModule],
  exports: [TaskListComponent, CreateTaskComponent, UpdateTaskComponent, TaskDetailsComponent, DeleteTaskComponent]
})
export class TaskModule {}
