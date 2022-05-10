import { Component, OnInit } from '@angular/core';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faSuperpowers } from '@fortawesome/free-brands-svg-icons';
import { faStairs } from '@fortawesome/free-solid-svg-icons';
import { faInfinity } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUSComponent implements OnInit {
  faBullseye=faBullseye;
  faSuperpowers=faSuperpowers;
  faStairs=faStairs
  faInfinity=faInfinity;
  constructor() { }

  ngOnInit(): void {
  }

}
