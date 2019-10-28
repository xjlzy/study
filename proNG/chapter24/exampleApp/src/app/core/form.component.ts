import { Component, Inject } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARE_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators";

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
    this.stateEvents
      // .pipe(skipWhile(state => state.mode === MODES.EDIT))
      // .pipe(distinctUntilChanged((firstState, secondState) => firstState.mode === secondState.mode && firstState.id === secondState.id))
      .subscribe(update => {
        this.product = new Product();
        if(update.id !== undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
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