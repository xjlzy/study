import { Component, Inject } from "@angular/core";
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARE_STATE } from './sharedState.model';
import { Product } from '../model/product.model';
import { Observer } from 'rxjs';

@Component({
  selector: 'paTable',
  moduleId: module.id,
  templateUrl: './table.component.html'
})

export class TableComponent {
  constructor(private model: Model, @Inject(SHARE_STATE) private state: Observer<SharedState>){}

  getProduct(key: number): Product{
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number): void {
    this.model.deleteProduct(key);
  }

  editProduct(key: number): void {
    this.state.next(new SharedState(MODES.EDIT, key));
  }

  createProduct() {
    this.state.next(new SharedState(MODES.CREATE));
  }
}