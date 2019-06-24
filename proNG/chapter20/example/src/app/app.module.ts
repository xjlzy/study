import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './components/productTable.component';
import { ProductFormComponent } from './components/productForm.component';
import { PaToggleViewComponent } from './components/toggleView.component';
import { PaCellColorDirective } from './directives/cellColor.directive';
import { PaAddTaxPipe } from './pipes/addTax.pipe';
import { PaCategoryFilterPipe } from './pipes/categoryFilter.pipe';

import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { PaDiscountDisplayComponent } from './discount.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { DiscountPipe } from './discount.pipe';
import { PaDiscountAmountDirective } from './discount.directive';
import { SimpleDataSource } from './model/datasource.model';
import { Model } from './model/repository.model';
import { LogService, LOG_SERVICE } from './log.service';
// 注册名称为fr-FR的语言包
registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent,
    ProductTableComponent,
    ProductFormComponent,
    PaToggleViewComponent,
    PaCellColorDirective,
    PaAddTaxPipe,
    PaCategoryFilterPipe,
    PaDiscountDisplayComponent,
    PaDiscountEditorComponent,
    DiscountPipe,
    PaDiscountAmountDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  providers: [DiscountService, SimpleDataSource, Model, 
    {   // 类提供程序  
      provide: LOG_SERVICE,
      useClass: LogService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}
