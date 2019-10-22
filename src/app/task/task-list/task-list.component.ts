import { Component, OnInit } from "@angular/core";
import EmployeeTask from 'src/app/models/EmployeeTask';
import { TaskService } from '../task.service';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  tasks: EmployeeTask[] = [];

  constructor(private tasksService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getEmployeeTasks().subscribe(response => console.log(response));
  }
}
