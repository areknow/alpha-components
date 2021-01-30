import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularButtonComponent } from './angular-button.component';

@NgModule({
  declarations: [AngularButtonComponent],
  imports: [CommonModule],
  exports: [AngularButtonComponent],
})
export class AngularButtonModule {}
