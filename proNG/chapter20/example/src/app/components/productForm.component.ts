import { Component, Output, EventEmitter, ViewEncapsulation, Inject, SkipSelf } from "@angular/core";
import { ProductFormGroup } from '../model/form.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';
import { VALUE_SERVICE } from '../valueDisplay.directive';

@Component({
  selector: 'paProductForm',
  templateUrl: `./productForm.component.html`,
  // styleUrls: ['./productForm.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
  // providers: [{
  //   provide: VALUE_SERVICE,
  //   useValue: 'Orangesss'
  // }],
  viewProviders: [{
    provide: VALUE_SERVICE,
    useValue: 'Oranges'
  }]
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  // @Output('paNewProduct')
  // newProductEvent = new EventEmitter<Product>();

  constructor(private model: Model, @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string) {
    console.log(`Service value: ${this.serviceValue}`);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;

    if(form.valid) {
      Object.assign(this.newProduct, form.value);
      this.model.saveProduct(this.newProduct);
      //this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}