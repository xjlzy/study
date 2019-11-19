import { Component, HostListener } from "@angular/core";
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'first',
  templateUrl: './first.component.html'
})
export class FirstComponent {

  constructor(private rep: Model) {}
  highlighted: boolean = false;

  category: string = 'Soccer';

  getProducts(): Product[] {
    return this.rep.getProducts().filter(p => p.category === this.category);
  }

  @HostListener('mouseenter', ['$event.type'])
  @HostListener('mouseleave', ['$event.type'])
  setHighlight(type: string) {
    this.highlighted = type === 'mouseenter';
  }
}