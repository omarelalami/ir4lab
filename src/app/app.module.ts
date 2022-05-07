import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { FooterComponent } from './footer/footer.component';
import { FactsComponent } from './facts/facts.component';
import { AnimatedDigitComponent } from './animated-digit/animated-digit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUSComponent,
    ServicesComponent,
    ProjectsComponent,
    TechnologiesComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent,
    FactsComponent,
    AnimatedDigitComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
