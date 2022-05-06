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
import { NavbraComponent } from './navbra/navbra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUSComponent,
    ServicesComponent,
    ProjectsComponent,
    TechnologiesComponent,
    ContactUsComponent,
    NavbraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
