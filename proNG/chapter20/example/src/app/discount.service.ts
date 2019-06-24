import { Injectable, Inject } from '@angular/core';
import { LogService, LOG_SERVICE } from './log.service';

@Injectable()
export class DiscountService {
  private discountValue: number = 10;

  constructor(@Inject(LOG_SERVICE) private log: LogService) {
    console.log(LOG_SERVICE.toString());
  }

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {
    this.discountValue = newValue || 0;
  }

  public applyDiscount(price: number) {
    this.log.logInfoMessage(`Discount ${this.discount} applied to price: ${price}`);
    return Math.max(price - this.discountValue, 5);
  }
}