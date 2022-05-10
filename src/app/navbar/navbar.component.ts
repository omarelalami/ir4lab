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
    var el1 = document.getElementById("collapsibleNavId");
    var el2 = document.getElementById("togglernav");
    if(el1?.classList.contains('show') && el2?.classList.contains('collapsed')){
      el1.classList.remove('show');
      el2.classList.remove('collapsed');
    }
    else{
      el1?.classList.add('show');
      el2?.classList.add('collapsed');
    }
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
