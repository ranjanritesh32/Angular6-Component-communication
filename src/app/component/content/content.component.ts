import { Component, OnInit, Input } from "@angular/core";
import { Employee } from "../../module/employee";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() obj1: Employee;
  @Input() firstName: string = "Ritesh";
  @Input() lastName: string = "Ranjan";
  @Input() email: string = "ritesh.a.ranjan@capgemini.com";
}
