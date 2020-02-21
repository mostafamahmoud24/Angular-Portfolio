import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { AboutComponent } from "./about/about.component";
import { Navbar1Component } from "./navbar1/navbar1.component";
import { HeroComponent } from "./hero/hero.component";
import { PassionComponent } from "./passion/passion.component";
import { ExperienceComponent } from "./experience/experience.component";
import { WorkComponent } from "./work/work.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    Navbar1Component,
    HeroComponent,
    PassionComponent,
    ExperienceComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
