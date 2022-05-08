import { Component, OnInit } from '@angular/core';
import { ModethemService } from '../modethem.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  mode:boolean =true;
  constructor(changeMode : ModethemService) { 
    this.mode=changeMode.toMode();
  }

  ngOnInit(): void {
    

  }

}
