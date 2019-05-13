import { Component, Input, ViewChildren, QueryList, AfterViewInit } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { PaCellColorDirective } from '../directives/cellColor.directive';

@Component({
  selector: 'paProductTable',
  templateUrl: `./productTable.component.html`
})
export class ProductTableComponent implements AfterViewInit {
  showTable: boolean = false;
  @Input('model')
  dataModel: Model;

  @ViewChildren(PaCellColorDirective)
  viewChildren: QueryList<PaCellColorDirective>;

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number): void {
    this.dataModel.deleteProduct(key);
  }

  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren.forEach((child, index) => {
        child.setColor(index % 2 === 0 ? true : false);
      });
    });
  }
}