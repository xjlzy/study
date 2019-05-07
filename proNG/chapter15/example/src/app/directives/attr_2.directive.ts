import { Directive, ElementRef, Attribute, Input, OnInit, OnChanges, SimpleChange, Output, EventEmitter } from "@angular/core";
import { Product } from '../model/product.model';

@Directive({
  selector: '[pa-attr-2]'
})

export class PaAttr2Directive implements OnInit, OnChanges {
  // @Attribute 读取宿主元素的指定属性(只能读取静态的值)
  // constructor(element: ElementRef, @Attribute('pa-attr-2') bgClass: string){
  //   element.nativeElement.classList.add(bgClass || 'bg-success');
  // }
  constructor(private element: ElementRef){
    this.element.nativeElement.addEventListener('click', e => {
      if(this.product != null) {
        this.click.emit(this.product.category);
      }
    })
  }

  @Input('pa-attr-2')
  bgClass: string;

  @Input('pa-product')
  product: Product;

  @Output("pa-category")
  click = new EventEmitter<string>();

  ngOnInit(): void {
    this.element.nativeElement.classList.add(this.bgClass || 'bg-success');
  }

  ngOnChanges(changes: {[property: string]: SimpleChange}): void {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;

    if(!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if(!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}