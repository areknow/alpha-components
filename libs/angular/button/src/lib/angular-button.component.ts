import { Component } from '@angular/core';

@Component({
  selector: 'vg-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: [''],
})
export class AngularButtonComponent {}
