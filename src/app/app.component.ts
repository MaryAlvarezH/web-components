import { Component, ViewChild, ElementRef } from "@angular/core";
import "../../dist/epy-components";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "testComponents";

  // @ViewChild("button") myTestComponent: ElementRef<HTMLEpyButtonElement>;

  // async onAction() {
  //   await this.myTestComponent.nativeElement.testComponentMethod();
  // }
}
