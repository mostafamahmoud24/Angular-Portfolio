import { Component, OnInit, HostListener, Inject } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({})),
      transition(":enter", [animate(300)]),
      transition(":leave", [animate(500)])
    ])
  ]
})
export class AboutComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document) {}

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 180) {
      let element = document.getElementById("about-container");
      element.classList.add("scroll-about-container");
      element.classList.remove("about-container");
    }
  }
}
