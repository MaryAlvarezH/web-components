import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test(e) {
    console.log("1 click from Angular", e);
  }

  test2(e) {
    console.log("2 click from Angular", e);
  }
}
