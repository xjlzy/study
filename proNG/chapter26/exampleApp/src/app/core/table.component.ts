import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paTable',
  moduleId: module.id,
  templateUrl: './table.component.html'
})

export class TableComponent {
  category: string = null;
  constructor(private model: Model, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    });
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts().filter(p => this.category === null || p.category === this.category);
  }

  get categories(): string[] {
    return this.model.getProducts().map(p => p.category).filter((cate, idx, array) => array.indexOf(cate) === idx);
  }

  deleteProduct(key: number): void {
    this.model.deleteProduct(key);
  }
}