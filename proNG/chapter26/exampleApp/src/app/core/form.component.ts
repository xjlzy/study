import { Component } from "@angular/core";
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { NgForm } from '@angular/forms';
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
      this.activeRoute.params.subscribe(params => {
        this.editing = params['mode'] === 'edit';
        const id = params['id'];
        if (id != null) {
          Object.assign(this.product, this.model.getProduct(parseInt(id)) || new Product());
        }
      });
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