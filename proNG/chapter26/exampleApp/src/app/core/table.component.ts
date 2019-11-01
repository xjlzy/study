import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'paTable',
  moduleId: module.id,
  templateUrl: './table.component.html'
})

export class TableComponent {
  constructor(private model: Model){}

  getProduct(key: number): Product{
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number): void {
    this.model.deleteProduct(key);
  }
}