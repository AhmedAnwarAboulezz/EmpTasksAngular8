import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentService } from './department.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DepartmentService
  ],
  exports: [
    DepartmentService
  ]
})
export class DepartmentModule { }
