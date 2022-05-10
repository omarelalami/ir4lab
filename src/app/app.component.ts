import { Component, OnInit, HostListener, Inject } from '@angular/core';

import { trigger, state, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('fade',
    [
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document:Document){

  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e:any) {
     if (window.pageYOffset > 550) {
       let element = document.getElementById('navbar');
       element?.classList.add('is-sticky');
     } else {
      let element = document.getElementById('navbar');
        element?.classList.remove('is-sticky');
     }
  }
  title = 'ir4lab';
}
