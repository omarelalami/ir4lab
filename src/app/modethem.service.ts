import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModethemService {
    mode =false;
  constructor() { }


  public toMode(): boolean {
      this.mode=!this.mode;
      return this.mode;
     }
}
