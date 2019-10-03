import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-directives",
  templateUrl: "./ng-directives.component.html",
  styleUrls: ["./ng-directives.component.css"]
})
export class NgDirectivesComponent implements OnInit {
  phone: any[] = ["asus", "iphone", "nokia", "mi"];
  num: number = 0;
  ver: any;
  version: any;
  togglecolor: boolean = true;
  mystyle = {};

  currentCssClass: string = "styleRed";
  changeColor: string = "red";

  changeCssClass() {
    if (this.currentCssClass == "styleRed") {
      this.currentCssClass = "styleWhite";
    } else {
      this.currentCssClass = "styleRed";
    }
  }
  // people: any[] = [
  //   { name: "Anderson", age: 35, city: "Sao Paulo" },
  //   { name: "John", age: 12, city: "Miami" },
  //   { name: "Peter", age: 22, city: "New York" }
  // ];

  changeStyle() {
    this.mystyle = {
      "font-weight": this.togglecolor ? "bold" : "normal",
      color: this.togglecolor ? "red" : "green"
    };
    this.togglecolor = !this.togglecolor;
  }

  newVersion(phones) {
    this.ver = phones;
    console.log(phones);
  }

  working: boolean = true;

  changeOnClick() {
    this.working = !this.working;
  }
  constructor() {}

  ngOnInit() {}
}
