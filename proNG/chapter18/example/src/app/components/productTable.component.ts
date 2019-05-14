import { Component, Input } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'paProductTable',
  templateUrl: `./productTable.component.html`
})
export class ProductTableComponent {
  showTable: boolean = false;
  taxRate: number = 0;
  categoryFilter: string = '';
  @Input('model')
  dataModel: Model;

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number): void {
    this.dataModel.deleteProduct(key);
  }
}