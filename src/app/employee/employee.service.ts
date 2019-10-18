import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import Employee from "../models/Employee";

@Injectable()
export class EmployeeService {
  baseURL = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(`${this.baseURL}/todos`);
  }

  createEmployee(employee: Employee) {
    return this.http.post(`${this.baseURL}/todos`, employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.post(`${this.baseURL}/todos`, employee);
  }
  getEmployeesById(id: number) {
    return this.http.get(`${this.baseURL}/todos/${id}`);
  }
  deleteEmployee(id: number) {
    return this.http.post(`${this.baseURL}/todos/delete`, id);
  }
}
