import { Component, ApplicationRef } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'chapter12',
    templateUrl: './chapter12.component.html'
})

export class Chapter12Component {
    model: Model = new Model();
    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

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

    getStyles(key: number) {
        let proudct = this.model.getProduct(key);
        return {
            'font-size': "30px",
            'margin.px': 100,
            color: proudct.price > 50 ? 'red' : 'green'
        };
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return `p-a-1 ${product.price < 50 ? 'bg-info' : 'bg-warning'}`;
    }
}