import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table.component';
import { FormComponent } from './form.compoennt';
import { ModelModule } from '../model/model.module';
import { SharedState } from './sharedState.model';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule],
  declarations: [TableComponent, FormComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [SharedState]
})

export class CoreModule {}