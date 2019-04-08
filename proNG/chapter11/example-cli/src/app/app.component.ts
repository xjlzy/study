import { Component } from '@angular/core';
import { Model } from './model/repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: Model = new Model();

  getClass(): string {
    return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
  }

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return `p-a-1 ${product.price < 50 ? 'bg-info' : 'bg-warning'}`;
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-xs-center bg-danger": product.name === 'Kayak',
      "bg-info": product.price < 50
    };
  }
}
