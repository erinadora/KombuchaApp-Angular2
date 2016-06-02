import { Component } from 'angular2/core';
import { Bucha } from './bucha.model';

@Component({
  selector: 'bucha-display',
  inputs: ['bucha'],
  template:`
  <div>
    <input *ngIf="bucha.low" type="checkbox" checked (click)="toggleLow(false)"/>
    <input *ngIf="!bucha.low" type="checkbox" (click)="toggleLow(true)"/>
  </div>
  `
})

export class BuchaComponent {
  public bucha: Bucha;
  toggleLow(selectedBucha: boolean){
    this.bucha.low = selectedBucha;
  }
}
