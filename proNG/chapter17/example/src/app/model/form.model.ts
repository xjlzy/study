import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LimitValidtor } from './limit.validator';

export class ProductFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: string, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidtionMessages(): string[] {
    let messages: string[] = [];
    if (this.errors) {
      for(let errorName in this.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${this.label}.`);
            break;
          case 'minlength':
            messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters.`);
            break;
          case 'maxlength':
            messages.push(`A ${this.label} musty be no more than ${this.errors['maxlength'].requiredLength} characters.`);
            break;
          case 'pattern':
            messages.push(`A ${this.label} contains illegal characters.`);
            break;
          case 'limit':
            messages.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}.`);
            break;
          default:
            break;
        }
      }
    }
    return messages;
  }
}

export class ProductFormGroup extends FormGroup {
  constructor() {
    super({
      name: new ProductFormControl('Name', 'name', '', Validators.required),
      category: new ProductFormControl('Category', 'category', '', Validators.compose([
        Validators.required, Validators.pattern('^[A-Za-z ]+$'), Validators.minLength(3), Validators.maxLength(10)
      ])),
      price: new ProductFormControl('Price', 'price', '', Validators.compose([
        Validators.required, Validators.pattern('^[0-9\.]+$'), LimitValidtor.Limit(100)
      ]))
    });
  }

  get productControls(): ProductFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as ProductFormControl);
  }

  getFormValidationMessages(form: any): string[] {
    let messages: string[] = [];
    this.productControls.forEach(c => c.getValidtionMessages().forEach(m => messages.push(m)));
    return messages;
  }
}