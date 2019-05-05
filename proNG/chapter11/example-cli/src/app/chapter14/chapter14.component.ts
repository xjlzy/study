import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'chapter14',
  templateUrl: './chapter14.component.html',
  styleUrls: [
    './chapter14.component.css'
  ]
})
export class Chapter14Component {
  model: Model = new Model();
  selectedProduct: string;
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log(`New product: ${this.jsonProduct}`);
  }

  getValidationMessage(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];
    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${thing}.`)
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least ${state.errors[errorName].requiredLength} characters`);
            break;
          case 'pattern':
            messages.push(`The ${thing} contains illegal charecters`);
            break;
        }
      }
    }
    return messages;
  }

  submitForm(form: NgForm) {
    console.log(form);
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessage(form.controls[k], k).forEach(m => messages.push(m));
    });
    return messages;
  }
}