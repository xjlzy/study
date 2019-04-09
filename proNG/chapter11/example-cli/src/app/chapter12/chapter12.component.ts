import { Component, ApplicationRef } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'chapter12',
    templateUrl: './chapter12.component.html'
})
export class Chapter12Component {
    model: Model = new Model();
    targetName: string = "Kayak";

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
}