import { Component, OnInit } from "@angular/core";

import Employee from "../../models/Employee";
import { EmployeeService } from "./../employee.service";

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  isDisabled = false;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {}

  handleSubmit() {
    this.isDisabled = true;
    const refrence = this.employeeService.createEmployee(this.employee);
    refrence.subscribe(response => {
      console.log("Employee Created");
      this.employee = new Employee();
      this.isDisabled = false;
    });
  }
}
