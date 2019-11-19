import { Component } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { HighlightTrigger } from './table.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'paTable',
  templateUrl: './table.component.html',
  animations: [HighlightTrigger]
})

export class TableComponent {
  category: string = null;
  highlightCategory: string = '';
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

  getRowState(category: string): string {
    return this.highlightCategory === '' ? '' : (this.highlightCategory === category ? 'selected' : 'unselected');
  }

  writeAnimationEvent(event: AnimationEvent, name: string, start: boolean) {
    console.log(`Animation ${name} ${start ? 'Start' : 'Done'} from: ${event.fromState} to: ${event.toState} time: ${event.totalTime}`);
  }
}