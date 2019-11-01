import { Component, OnInit, DoCheck, KeyValueDiffer, KeyValueDiffers } from "@angular/core";
import { Model } from '../model/repository.model';

@Component({
  selector: 'paCategoryCount',
  template: `
    <div class="bg-info p-a-1">There are {{Count}} categories.</div>
  `
})

export class CategoryCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer<any, any>;

  count: number = 0;

  constructor(private model: Model, private keyValueDiffers: KeyValueDiffers) {}

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) !== null) {
      this.count = this.model.getProducts().map(p => p.category).filter((cate, index, array) => array.indexOf(cate) === index).length;
    }
  }
}