import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TaskModule } from "./task/task.module";
import { EmployeeModule } from "./employee/employee.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, EmployeeModule, TaskModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
