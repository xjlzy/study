import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, HostListener } from "@angular/core";
import { Product } from '../model/product.model';

@Directive({
  selector: '[pa-attr-3]'
})

export class PaAttr3Directive {
  // @Attribute 读取宿主元素的指定属性(只能读取静态的值)
  // constructor(element: ElementRef, @Attribute('pa-attr-3') bgClass: string){
  //   element.nativeElement.classList.add(bgClass || 'bg-success');
  // }
  // constructor(private element: ElementRef){
  //   this.element.nativeElement.addEventListener('click', e => {
  //     if(this.product != null) {
  //       this.click.emit(this.product.category);
  //     }
  //   })
  // }

  @Input('pa-attr-3')
  @HostBinding('class')
  bgClass: string;

  @Input('pa-product')
  product: Product;

  @Output("pa-category")
  click = new EventEmitter<string>();

  @HostListener('click')
  triggerCustomEvent() {
    if(this.product != null) {
      this.click.emit(this.product.category);
    }
  }
}