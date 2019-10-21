import { Component, OnInit } from "@angular/core";

import Employee from "../../models/Employee";
import { EmployeeService } from "./../employee.service";
import { DepartmentService } from "../../department/department.service";
import Department from 'src/app/models/Department';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-create-employee",
  templateUrl: "./create-employee.component.html",
  styleUrls: ["./create-employee.component.css"]
})
export class CreateEmployeeComponent implements OnInit {
  isDisabled = false;
  employee: Employee = new Employee();
  departments: Department[] = [];

  constructor(
    private employeeService: EmployeeService, 
    private departmentService: DepartmentService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.departmentService.getDepartments().subscribe((response: any) => {
      this.departments = response;
      console.log(this.departments);
    });
  }

  handleSubmit() {
    this.isDisabled = true;
    if(this.employee.departmentId == 0 || this.employee.departmentId == null){
      this.toastr.error('Please Select Department First');
      return;
    }

    console.log(this.employee);
    const refrence = this.employeeService.createEmployee(this.employee);
    refrence.subscribe(response => {
      this.toastr.success("Employee Created Successfully");
      this.employee = new Employee();
      this.isDisabled = false;
    });
  }
}
