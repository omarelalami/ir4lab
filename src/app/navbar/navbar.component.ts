import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  faBars = faBars;
  sticky :any;

  constructor( ) {

   }

  ngOnInit(): void {

  }
  show(){
    var el1 = document?.getElementsByClassName("collapsibleNavId");
    var el2 = document?.getElementsByClassName("togglernav");


      Array.from(el1).forEach(function(item) {
        if(item.classList.contains('show')){
        item.classList.remove('show');
      }
      else{
        item.classList.add('show');
      }
     });

     Array.from(el2).forEach(function(item) {
       if(item.classList.contains('collapsed')){
      item.classList.remove('collapsed');
    }
    else {
      item.classList.add('collapsed');
    }
   });

  }
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: 'smooth',
    block: 'start',
    inline: 'nearest'})
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: 'smooth',
    block: 'start',
    inline: 'nearest'})
  }
  toServices(){
    document.getElementById("services")?.scrollIntoView({behavior: 'smooth',
  block: 'start',
  inline: 'nearest'})
  }
  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior: 'smooth',
  block: 'start',
  inline: 'nearest'})
  }
  toTechnologies(){
    document.getElementById("technologies")?.scrollIntoView({behavior: 'smooth',
  block: 'start',
  inline: 'nearest'})
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: 'smooth',
  block: 'start',
  inline: 'nearest'})
  }
  onScroll(event:any){
    this.sticky=true;
  }




}
// window.addEventListener("scroll", function() {
//   let navArea = document.getElementById("navbar");

//   if (window.pageYOffset > 200) {
//   navArea?.classList.add("");

//   } else {
//   navArea?.classList.remove("is-sticky");

//   }
//   });
