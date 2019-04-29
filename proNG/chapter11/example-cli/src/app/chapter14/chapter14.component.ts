import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'chapter14',
  templateUrl: './chapter14.component.html'
})
export class Chapter14Component {
  model: Model = new Model();
  selectedProduct: string;
  newProduct: Product = new Product();

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
}