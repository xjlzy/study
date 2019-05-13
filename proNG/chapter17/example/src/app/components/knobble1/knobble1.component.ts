import { Component } from "@angular/core";
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'knobble1',
  templateUrl: './knobble1.component.html',
  styles: ['/deep/ div{border: 2px solid black;font-style:italic;}']
})

export class Knobble1Component {
  model: Model = new Model();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
}

