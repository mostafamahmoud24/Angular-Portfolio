import { Component, OnInit, HostListener, Inject } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";
import { DOCUMENT } from "@angular/common";
import { EasingLogic } from "ngx-page-scroll-core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({})),
      transition(":enter", [animate(300)]),
      transition(":leave", [animate(500)])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {
      let element = document.getElementById("navbar");
      let titleelemet = document.getElementById("nav-title-container");
      let linkselement = document.getElementById("nav-links");
      titleelemet.classList.add("sticky-title");
      linkselement.classList.add("sticky-links");
      element.classList.add("sticky");
    } else {
      let element = document.getElementById("navbar");
      let titleelemet = document.getElementById("nav-title-container");
      let linkselement = document.getElementById("nav-links");
      titleelemet.classList.remove("sticky-title");
      titleelemet.classList.add("scroll-title");
      linkselement.classList.remove("sticky-links");
      linkselement.classList.add("scroll-links");
      element.classList.remove("sticky");
      element.classList.add("scroll");
    }
  }

  public myEasing: EasingLogic = (t: 0.25, b: 0.1, c: 0.25, d: 0.3): number => {
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

  myFunction() {
    var x = document.getElementById("navbar-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}
