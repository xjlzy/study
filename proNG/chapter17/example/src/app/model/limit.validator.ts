import { FormControl } from '@angular/forms';

export class LimitValidtor {
  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (isNaN(val) && val > limit) {
        return { "limit": { "limit": limit, "actualValue": val } };
      } else {
        return null;
      }
    }
  }
}