import { EmployeeService } from "./employee.service";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DataTablesModule } from 'angular-datatables';

import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DepartmentService } from '../department/department.service';

@NgModule({
  declarations: [EmployeeListComponent, CreateEmployeeComponent, UpdateEmployeeComponent, EmployeeDetailsComponent, DeleteEmployeeComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, DataTablesModule],
  exports: [EmployeeListComponent, CreateEmployeeComponent, UpdateEmployeeComponent, EmployeeDetailsComponent, DeleteEmployeeComponent],
  providers: [EmployeeService]
})
export class EmployeeModule {}
