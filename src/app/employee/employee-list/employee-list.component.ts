import { EmployeeService } from "./../employee.service";
import { Component, OnInit } from "@angular/core";

import Employee from "../../models/Employee";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  isLoading: boolean = true;

  constructor(private employee_service: EmployeeService) {}

  ngOnInit() {
    const refrence = this.employee_service.getEmployees();
    refrence.subscribe((response: any) => {
      this.employees = response;
      this.isLoading = false;
      console.log("emplyees", this.employees);
    });
    console.log("emplyees", this.employees);
  }

  getname() {
    console.log("getname");
  }
}
