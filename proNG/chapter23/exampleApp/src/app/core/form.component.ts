import { Component, Inject } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARE_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";

@Component({
  selector: 'paForm',
  moduleId: module.id,
  templateUrl: './form.component.html'
})

export class FormComponent {
  product: Product = new Product();
  editing: boolean = false;
  constructor(private model: Model,
    @Inject(SHARE_STATE) private stateEvents: Observable<SharedState>) {
    // this.stateEvents
    //   .pipe(map(state => new SharedState(state.mode, state.id === 5 ? 1 : state.id)))
    //   .pipe(filter(state => state.id !== 3))
    //   .subscribe((update) => {
    //     this.product = new Product();
    //     if (update.id != undefined) {
    //       Object.assign(this.product, this.model.getProduct(update.id));
    //     }
    //     this.editing = update.mode === MODES.EDIT;
    //   });
    this.stateEvents
      .pipe(map(state => state.mode === MODES.CREATE ? -1 : state.id))
      .pipe(filter(id => id !== 3))
      .subscribe(id => {
        this.editing = id !== -1;
        this.product = new Product();
        if (id !== -1) {
          Object.assign(this.product, this.model.getProduct(id));
        }
      })
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm(): void {
    this.product = new Product();
  }
}