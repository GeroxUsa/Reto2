import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import $ from "jquery";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
