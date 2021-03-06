import { Component, OnInit } from "@angular/core";
import { EasingLogic } from "ngx-page-scroll-core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //smooth scrolling
  public myEasing: EasingLogic = (t: 0.25, b: 0.1, c: 0.25, d: 1): number => {
    // easeInOutExpo easing
    // if (t === 0) {
    //   return b;
    // }
    // if (t === d) {
    //   return b + c;
    // }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }

    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  };
}
