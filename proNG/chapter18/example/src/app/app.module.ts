import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Knobble1Component } from './components/knobble1/knobble1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './components/productTable.component';
import { ProductFormComponent } from './components/productForm.component';
import { PaToggleViewComponent } from './components/toggleView.component';
import { PaCellColorDirective } from './directives/cellColor.directive';
import { PaAddTaxPipe } from './pipes/addTax.pipe';
import { PaCategoryFilterPipe } from './pipes/categoryFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Knobble1Component,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleViewComponent,
    PaCellColorDirective,
    PaAddTaxPipe,
    PaCategoryFilterPipe
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
