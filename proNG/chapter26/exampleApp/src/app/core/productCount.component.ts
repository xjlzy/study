import { Component, KeyValueDiffer, KeyValueDiffers, OnInit, DoCheck } from "@angular/core";
import { Model } from '../model/repository.model';

@Component({
  selector: 'paProductCount',
  template: `
    <div class="bg-info p-a-1">There are {{count}} products.</div>
  `
})

export class ProductCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer<any, any>;

  count: number = 0;
  constructor(private model: Model,
    private keyValueDiffers: KeyValueDiffers) { }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) !== null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts().length;
  }
}