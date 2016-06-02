import { Component } from 'angular2/core';
import { Bucha } from './bucha.model';

@Component({
  selector: 'edit-bucha-details',
  inputs: ['bucha'],
  template: `
  <div class="bucha-form">
    <h3>Edit Description: </h3>
    <input [(ngModel)]="bucha.description" class="col-sm-8 input-lg bucha-form"/>
  </div>
  `
})
export class EditBuchaDetailsComponent {
  public bucha: Bucha;
}
