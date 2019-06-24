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
  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = '2020-02-20T00:00:00.000Z';
  dateNumber: number = 1582156800000;

  itemCount: number = 0;
  // @Input('model')
  // dataModel: Model;

  constructor(private dataModel: Model) { }

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