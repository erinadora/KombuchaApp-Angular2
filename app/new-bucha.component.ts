import { Component, EventEmitter } from 'angular2/core';
import { Bucha } from './bucha.model';

@Component({
  selector: 'new-bucha',
  outputs: ['onSubmitNewBucha'],
  template: `
  <div class="bucha-form">
   <h3>Add New Bucha:</h3>
   <input placeholder="Name" class="col-sm-8 input-lg" #newName>
   <input placeholder="Flavor" class="col-sm-8 input-lg" #newDescription>
   <button (click)="addBucha(newName, newDescription)"class="mybutton">Add</button>
  </div>
  `
})
export class NewBuchaComponent {
  public onSubmitNewBucha: EventEmitter<Bucha>;
  constructor(){
    this.onSubmitNewBucha = new EventEmitter();
  }
    addBucha(newName: HTMLInputElement, newDescription: HTMLInputElement){
      var newBucha = new Bucha(newName.value, newDescription.value, 0);
      this.onSubmitNewBucha.emit(newBucha);
      newName.value = "";
      newDescription.value = "";
    }
}
