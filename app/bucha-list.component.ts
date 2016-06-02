import { Component, EventEmitter } from 'angular2/core';
import { BuchaComponent } from './bucha.component';
import { Bucha } from './bucha.model';
import { EditBuchaDetailsComponent } from './edit-bucha-details.component';
import { NewBuchaComponent } from './new-bucha.component';
import { LowPipe } from './low.pipe';

@Component({
  selector: 'bucha-list',
  inputs: ['buchaList'],
  outputs: ['onBuchaSelect'],
  directives: [BuchaComponent, EditBuchaDetailsComponent, NewBuchaComponent],
  pipes: [LowPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">All</option>
    <option value="low">Sold Out</option>
    <option value="notLow" selected="selected">Available</option>
  </select>
  <bucha-display *ngFor="#featuredBucha of buchaList" (click)="buchaClicked(featuredBucha)" [class.selected]="featuredBucha === selectedBucha" [bucha]="featuredBucha">
  </bucha-display>
  <edit-bucha-details *ngIf="selectedBucha" [bucha]="selectedBucha">
  </edit-bucha-details>
  <new-bucha (onSubmitNewBucha)="createBucha($event)"></new-bucha>
  `
})
export class BuchaListComponent {
  public buchaList: Bucha[];
  public onBuchaSelect: EventEmitter<Bucha>;
  public selectedBucha: Bucha;
  public filterLow: string = "notLow";
  constructor() {
    this.onBuchaSelect = new EventEmitter();
  }
  buchaClicked(clickedBucha: Bucha): void {
  console.log(this.buchaList);
    this.selectedBucha = clickedBucha;
    this.onBuchaSelect.emit(clickedBucha);
  }
  createBucha(newBucha: Bucha): void {
    this.buchaList.push(newBucha);
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
