import { Component } from "@angular/core";
import { Employee } from "./module/employee";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  firstName: string = "Angular";
  msg: string;
  obj: Employee = {
    firstName: "Ritesh",
    lastName: "Ranjan",
    salary: 20000,
    designation: "Sr Con"
  };
  getMessage(message: string) {
    this.msg = message;
  }
}
