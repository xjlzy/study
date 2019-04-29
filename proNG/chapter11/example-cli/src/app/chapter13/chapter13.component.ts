import { Component, ApplicationRef } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'chapter13',
    templateUrl: './chapter13.component.html'
})
export class Chapter13Component {
    model: Model = new Model();
    targetName: string = "Kayak";

    counter: number = 1;

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.model.getProducts().length;
    }
    getProductCount1(): number {
        console.log('getProductCount invoked');
        return this.model.getProducts().length;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }

    get nextProduct(): Product {
        return this.model.getProducts().shift();
    }
}