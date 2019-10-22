import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from "./app.component";
import { TaskModule } from "./task/task.module";
import { EmployeeModule } from "./employee/employee.module";
import { appRouting } from './app.routing';
import { DepartmentModule } from './department/department.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    appRouting,
    EmployeeModule,
    DepartmentModule,
    TaskModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
