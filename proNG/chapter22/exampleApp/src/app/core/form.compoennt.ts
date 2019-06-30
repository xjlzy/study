import { Component } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES } from './sharedState.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'paForm',
  moduleId: module.id,
  templateUrl: './form.component.html'
})

export class FormComponent {
  product: Product = new Product();

  constructor(private model: Model, private state: SharedState) {}

  get editing(): boolean {
    return this.state.mode === MODES.EDIT;
  }

  submitForm(form: NgForm): void {
    if(form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm(): void {
    this.product = new Product();
  }
}