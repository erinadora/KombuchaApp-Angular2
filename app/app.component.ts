import { Component, EventEmitter } from 'angular2/core';
import { BuchaListComponent } from './bucha-list.component';
import { Bucha } from './bucha.model';

@Component({
  selector: 'my-app',
  directives: [BuchaListComponent],
  template: `
    <div class="container">
      <h1>Muchas Buchas</h1>
      <
      <bucha-list [buchaList]="buchas" (onBuchaSelect)="buchaWasSelected($event)">
      </bucha-list>
    </div>
  `
})
export class AppComponent {
  public buchas: Bucha[];
  constructor() {
    this.buchas = [
      new Bucha("Kombucha ", "Dragonfruit ", 1),
      new Bucha("Kombucha ", "Quince ", 2),
      new Bucha("Kombucha ", "Passionfruit ", 3),
      new Bucha("Kombucha ", "Guava ", 3),
    ];
  }
  buchaWasSelected(clickedBucha: Bucha): void {
    console.log(clickedBucha);
  }
}
