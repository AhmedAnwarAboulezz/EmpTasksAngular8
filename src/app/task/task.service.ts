import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import EmployeeTask from '../models/EmployeeTask';

@Injectable()
export class TaskService {
  baseURL = "https://jsonplaceholder.typicode.com/EmpTasks";
  constructor(private http: HttpClient) { }
  
  getTasks() {
    return this.http.get(`${this.baseURL}/GetTasks`);
  }

  createTask(employeetask: EmployeeTask) {
    return this.http.post(`${this.baseURL}/CreateTask`, employeetask);
  }

  updateTask(employeetask: EmployeeTask) {
    return this.http.post(`${this.baseURL}/EditTask`, employeetask);
  }
  getTaskById(id: number) {
    return this.http.get(`${this.baseURL}/GetTaskById/${id}`);
  }
  deleteTask(id: number) {
    return this.http.post(`${this.baseURL}/DeleteTask`, id);
  }
  getTasksByEmpId(empid: number) {
    return this.http.get(`${this.baseURL}/GetTasksByEmpId/${empid}`);
  }
}
