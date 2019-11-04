import { Component, KeyValueDiffer, KeyValueDiffers, OnInit, DoCheck } from "@angular/core";
import { Model } from '../model/repository.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paProductCount',
  template: `
    <div class="bg-info p-a-1">There are {{count}} products.</div>
  `
})

export class ProductCountComponent implements OnInit, DoCheck {
  private differ: KeyValueDiffer<any, any>;
  private category: string = null;

  count: number = 0;
  constructor(private model: Model,
    private keyValueDiffers: KeyValueDiffers,
    private activateRoute: ActivatedRoute) {
    console.log(this.activateRoute.pathFromRoot);
    this.activateRoute.pathFromRoot.forEach(route => {
      route.params.subscribe(params => {
        if (params['category'] != null) {
          this.category = params['category'];
          this.updateCount();
        }
      })
    });
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) !== null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts()
      .filter(p => this.category === null || p.category === this.category).length;
  }
}