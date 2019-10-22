import { RouterModule, Routes } from "@angular/router";

import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { CreateDepartmentComponent } from './department/create-department/create-department.component';

const appRoutes: Routes = [
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/create', component: CreateEmployeeComponent },
    { path: 'employees/edit/:id', component: CreateEmployeeComponent },

    { path: 'departments', component: DepartmentListComponent },
    { path: 'departments/create', component: CreateDepartmentComponent },
    { path: 'departments/edit/:id', component: CreateDepartmentComponent },

    { path: 'tasks', component: TaskListComponent },
    { path: 'tasks/create', component: CreateTaskComponent },
 ];

 export const appRouting = RouterModule.forRoot(appRoutes);