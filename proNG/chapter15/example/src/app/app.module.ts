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
import { Knobble4Component } from './knobble4/knobble4.component';
import { PaAttr2Directive } from './directives/attr_2.directive';
import { Knobble5Component } from './knobble5/knobble5.component';
import { PaAttr3Directive } from './directives/attr_3.directive';
import { Knobble6Component } from './knobble6/knobble6.component';
import { PaAttr4Directive } from './directives/attr_4.directive';
import { PaModelDirective } from './directives/twoway.directive';

@NgModule({
  declarations: [
    AppComponent,
    PaAttrDirective,
    PaAttr1Directive,
    PaAttr2Directive,
    PaAttr3Directive,
    PaAttr4Directive,
    PaModelDirective,
    Knobble1Component,
    Knobble2Component,
    Knobble3Component,
    Knobble4Component,
    Knobble5Component,
    Knobble6Component
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
