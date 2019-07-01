import { Component, DoCheck } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES } from './sharedState.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'paForm',
  moduleId: module.id,
  templateUrl: './form.component.html'
})

export class FormComponent implements DoCheck {
  product: Product = new Product();
  private lastId: number;
  constructor(private model: Model, private state: SharedState) {}

  ngDoCheck() {
    if(this.lastId !== this.state.id) {
      this.product = new Product();
      if(this.state.mode === MODES.EDIT) {
        Object.assign(this.product, this.model.getProduct(this.state.id));
      }
      this.lastId = this.state.id;
    }
  }

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