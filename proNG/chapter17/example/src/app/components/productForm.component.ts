import { Component, Output, EventEmitter, ViewEncapsulation } from "@angular/core";
import { ProductFormGroup } from '../model/form.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'paProductForm',
  templateUrl: `./productForm.component.html`,
  styleUrls: ['./productForm.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if(form.valid) {
      Object.assign(this.newProduct, form.value);
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}