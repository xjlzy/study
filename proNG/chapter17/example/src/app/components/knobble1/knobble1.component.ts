import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { ProductFormGroup } from 'src/app/model/form.model';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'knobble1',
  templateUrl: './knobble1.component.html'
})

export class Knobble1Component {
  model: Model = new Model();
  
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  showTable: boolean = true;
  darkColor: boolean = false;

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
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

