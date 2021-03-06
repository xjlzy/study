import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chapter12Component } from './chapter12/chapter12.component';
import { Chapter13Component } from './chapter13/chapter13.component';
import { Chapter14Component } from './chapter14/chapter14.component';
import { Chapter14ModelFormComponent } from './chapter14/chapter14-model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Chapter12Component,
    Chapter13Component,
    Chapter14Component,
    Chapter14ModelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
