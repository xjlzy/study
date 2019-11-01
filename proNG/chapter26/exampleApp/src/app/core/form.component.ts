import { Component, Inject } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { SharedState, MODES, SHARE_STATE } from './sharedState.model';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'paForm',
  moduleId: module.id,
  templateUrl: './form.component.html'
})

export class FormComponent {
  product: Product = new Product();
  editing: boolean = false;
  constructor(private model: Model,
    private activeRoute: ActivatedRoute,
    private router: Router) {
    this.editing = this.activeRoute.snapshot.params['mode'] === 'edit';
    let id = this.activeRoute.snapshot.params['id'];
    if (id != null) {
      Object.assign(this.product, model.getProduct(id) || new Product());
      // let name = this.activeRoute.snapshot.params['name'];
      // let category = this.activeRoute.snapshot.params['category'];
      // let price = this.activeRoute.snapshot.params['price'];
      // if (name != null && category != null && price != null) {
      //   this.product.id = parseInt(id);
      //   this.product.name = name;
      //   this.product.category = category;
      //   this.product.price = price;
      // } else {
      //   Object.assign(this.product, model.getProduct(parseInt(id)) || new Product());
      // }
    }
    // this.stateEvents
    //   // .pipe(skipWhile(state => state.mode === MODES.EDIT))
    //   // .pipe(distinctUntilChanged((firstState, secondState) => firstState.mode === secondState.mode && firstState.id === secondState.id))
    //   .subscribe(update => {
    //     this.product = new Product();
    //     if(update.id !== undefined) {
    //       Object.assign(this.product, this.model.getProduct(update.id));
    //     }
    //     this.editing = update.mode === MODES.EDIT;
    //   })
  }

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.model.saveProduct(this.product);
      // this.product = new Product();
      // form.reset();
      this.router.navigateByUrl('/');
    }
  }

  resetForm(): void {
    this.product = new Product();
  }
}