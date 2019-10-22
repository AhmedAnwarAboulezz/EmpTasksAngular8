import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import EmployeeTask from '../models/EmployeeTask';

@Injectable()
export class TaskService {
  baseURL = "http://localhost:44100/api/EmployeeTasks";

  constructor(private http: HttpClient) {}

  getEmployeeTasks() {
    let path = `${this.baseURL}/GetAll`;
    return this.http.get(path);
  }

  createEmployeeTask(employeeTask: EmployeeTask) {
    return this.http.post(`${this.baseURL}/Add`, employeeTask);
  }

  updateEmployeeTask(employeeTask: EmployeeTask) {
    return this.http.put(`${this.baseURL}/update`, employeeTask);
  }
  getEmployeeTasksById(id: number) {
    return this.http.get(`${this.baseURL}/Get/${id}`);
  }
  deleteEmployeeTask(id: number) {
    return this.http.delete(`${this.baseURL}/delete/${id}`);
  }
}
