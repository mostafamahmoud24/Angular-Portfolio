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
    //Navbar animation
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

    //active page highlight in navbar navigation links
    if (
      window.pageYOffset >= document.getElementById("about").offsetTop &&
      window.pageYOffset < document.getElementById("passion").offsetTop
    ) {
      let about = document.getElementById("navbar-about");
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let work = document.getElementById("navbar-work");
      passion.classList.remove("target");
      about.classList.add("target");
      experience.classList.remove("target");
      work.classList.remove("target");
    } else if (
      window.pageYOffset >= document.getElementById("passion").offsetTop &&
      window.pageYOffset < document.getElementById("experience").offsetTop
    ) {
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let about = document.getElementById("navbar-about");
      about.classList.remove("target");
      passion.classList.add("target");
      experience.classList.remove("target");
    } else if (
      window.pageYOffset >= document.getElementById("experience").offsetTop &&
      window.pageYOffset < document.getElementById("work").offsetTop
    ) {
      let about = document.getElementById("navbar-about");
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let work = document.getElementById("navabr-work");
      about.classList.remove("target");
      passion.classList.remove("target");
      work.classList.remove("target");
      experience.classList.add("target");
    } else if (
      window.pageYOffset >= 3250 &&
      window.pageYOffset < document.getElementById("contact").offsetTop - 200
    ) {
      let about = document.getElementById("navbar-about");
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let work = document.getElementById("navabr-work");
      let contact = document.getElementById("navbar-contact");
      about.classList.remove("target");
      passion.classList.remove("target");
      contact.classList.remove("target");
      experience.classList.remove("target");
      work.classList.add("target");
    } else if (
      window.pageYOffset >
      document.getElementById("contact").offsetTop - 200
    ) {
      let about = document.getElementById("navbar-about");
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let work = document.getElementById("navabr-work");
      let contact = document.getElementById("navbar-contact");
      about.classList.remove("target");
      passion.classList.remove("target");
      experience.classList.remove("target");
      work.classList.remove("target");
      contact.classList.add("target");
    } else {
      let about = document.getElementById("navbar-about");
      let passion = document.getElementById("navbar-passion");
      let experience = document.getElementById("navbar-experience");
      let contact = document.getElementById("navbar-contact");
      about.classList.remove("target");
      about.classList.remove("target");
      experience.classList.remove("target");
      passion.classList.remove("target");
    }

    //passion component spinning icon animation
    if (window.pageYOffset > 1200) {
      let design = document.getElementById("design");
      let development = document.getElementById("development");
      let knowledge = document.getElementById("knowledge");
      design.classList.remove("passion-component");
      design.classList.add("design-component");
      development.classList.remove("development-component");
      development.classList.add("development-component");
      knowledge.classList.remove("knowledge-component");
      knowledge.classList.add("knowledge-component");
    }
  }

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
