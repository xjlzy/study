import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { ProductFormGroup } from '../model/form.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'knobble6',
  templateUrl: './knobble6.component.html'
})

export class Knobble6Component {
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  submitForm(form: NgForm): void {
    this.formSubmitted = true;
    if(form.valid) {
      Object.assign(this.newProduct, form.value);
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}