import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ModelModule, CoreModule, MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
