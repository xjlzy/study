import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Knobble1Component } from './knobble1/knobble1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './Directive/pa-attr.directive';
import { PaStructureDirective } from './Directive/structure.directive';
import { PaIteratorDirective } from './Directive/iterator.directive';
import { PaCellColorDirective } from './Directive/cellColor.directive';
import { PaCellColorSwitcherDirective } from './Directive/cellColorSwitcher.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaAttrDirective,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColorDirective,
    PaCellColorSwitcherDirective,
    Knobble1Component
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
