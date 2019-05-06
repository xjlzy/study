import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Knobble1Component } from './knobble1/knobble1.component';
import { Knobble2Component } from './knobble2/knobble2.component';
import { PaAttrDirective } from './directives/attr.directive';
import { Knobble3Component } from './knobble3/knobble3.component';
import { PaAttr1Directive } from './directives/attr_1.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaAttrDirective,
    PaAttr1Directive,
    Knobble1Component,
    Knobble2Component,
    Knobble3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
