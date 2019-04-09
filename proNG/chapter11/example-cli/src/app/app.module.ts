import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter12Component } from './chapter12/chapter12.component';
import { Chapter13Component } from './chapter13/chapter13.component';

@NgModule({
  declarations: [
    AppComponent,
    Chapter12Component,
    Chapter13Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
