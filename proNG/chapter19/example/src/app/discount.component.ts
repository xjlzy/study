import { Component } from "@angular/core";
import { DiscountService } from './discount.service';

@Component({
  selector: 'paDiscountDisplay',
  template: `
    <div class="bg-info p-a-1">
      The discount is {{disCounter.discount}}
    </div>
  `
})

export class PaDiscountDisplayComponent {
  constructor(private discounter: DiscountService) {}

  get disCounter(): DiscountService {
    return this.discounter;
  }
}