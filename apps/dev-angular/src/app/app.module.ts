import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularButtonModule } from '@very-good-components/angular/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AngularButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
