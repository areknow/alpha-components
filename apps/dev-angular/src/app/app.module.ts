import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AlphaButtonModule } from '@miniml/alpha-components-angular/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    AlphaButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
