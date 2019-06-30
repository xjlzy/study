import { Pipe, PipeTransform } from "@angular/core";
import { DiscountService } from './discount.service';
import { LogService } from './log.service';

@Pipe({
  name: 'discount',
  pure: false
})
export class DiscountPipe implements PipeTransform {
  constructor(private discount: DiscountService, private log: LogService) {}

  transform(price: number) {
    if(price > 100) {
      this.log.logInfoMessage(`Large price discount: ${price}`);
    }
    return this.discount.applyDiscount(price);
  }
}