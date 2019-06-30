import { Directive, KeyValueDiffer, KeyValueDiffers, Input, OnInit, OnChanges, DoCheck, SimpleChanges } from "@angular/core";
import { DiscountService } from './discount.service';

@Directive({
  selector: 'td[pa-price]',
  exportAs: 'discount'
})

export class PaDiscountAmountDirective implements OnInit, OnChanges, DoCheck {
  private differ: KeyValueDiffer<any, any>;
  constructor(private keyValueDiffers: KeyValueDiffers, private discount: DiscountService) {

  }

  @Input('pa-price') originalPrice: number;

  discountAmount: number;

  ngOnInit(): void {
    this.differ = this.keyValueDiffers.find(this.discount).create();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['originalPrice'] != null) {
      this.updateValue();
    }
  }

  ngDoCheck() {
    if(this.differ.diff(this.discount) != null) {
      this.updateValue();
    }
  }

  private updateValue() {
    this.discountAmount = this.originalPrice - this.discount.applyDiscount(this.originalPrice);
  }
}