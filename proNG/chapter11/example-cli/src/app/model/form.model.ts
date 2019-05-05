import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ProductFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }
}

export class ProductFormGroup extends FormGroup {
  constructor() {
    super({
      name: new ProductFormControl('Name', 'name', '', Validators.required),
      category: new ProductFormControl('Catrgory', 'catrgory', '', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)
      ])),
      price: new ProductFormControl('Price', 'price', '', Validators.compose([Validators.required, Validators.pattern('^[0-9\.]+$')]))
    });
  }

  get productControls(): ProductFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
  }
}