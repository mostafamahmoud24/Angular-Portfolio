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
  selector: "navbar1",
  templateUrl: "./navbar1.component.html",
  styleUrls: ["./navbar1.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({})),
      transition(":enter", [animate(300)]),
      transition(":leave", [animate(500)])
    ])
  ]
})
export class Navbar1Component implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

  myFunction() {
    var x = document.getElementById("navbar-links");
    if (x.classList.contains("hidden")) {
      x.classList.remove("hidden");
    } else {
      x.classList.add("hidden");
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 50) {
      let element = document.getElementById("navbar");
      let titleelemet = document.getElementById("navbar-title");
      let linkselement = document.getElementById("navbar-links");
      element.classList.add("scroll-navbar");
      titleelemet.classList.add("scroll-navbar-title");
      linkselement.classList.add("scroll-navbar-links");
    } else {
      let element = document.getElementById("navbar");
      let titleelemet = document.getElementById("navbar-title");
      let linkselement = document.getElementById("navbar-links");
      element.classList.remove("scroll-navbar");
      element.classList.add("sticky-navbar");
      titleelemet.classList.remove("scroll-navbar-title");
      titleelemet.classList.add("sticky-navbar-title");
      linkselement.classList.remove("scroll-navbar-links");
      linkselement.classList.add("sticky-navbar-links");
    }

    if (window.pageYOffset > 740) {
      let element = document.getElementById("navbar-about");
      element.classList.add("target");
    } else {
      let element = document.getElementById("navbar-about");
      element.classList.remove("target");
    }
  }

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
