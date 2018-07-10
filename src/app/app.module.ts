import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessDirective } from './success.directive';
import { FailureDirective } from './failure.directive';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDirective,
    FailureDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
