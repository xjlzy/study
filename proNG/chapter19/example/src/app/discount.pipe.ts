import { Pipe, PipeTransform } from "@angular/core";
import { DiscountService } from './discount.service';

@Pipe({
  name: 'discount',
  pure: false
})
export class DiscountPipe implements PipeTransform {
  constructor(private discount: DiscountService) {}

  transform(price: number) {
    return this.discount.applyDiscount(price);
  }
}