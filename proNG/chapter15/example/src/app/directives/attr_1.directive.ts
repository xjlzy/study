import { Directive, ElementRef, Attribute, Input, OnInit, OnChanges, SimpleChange } from "@angular/core";

@Directive({
  selector: '[pa-attr-1]'
})

export class PaAttr1Directive implements OnInit, OnChanges {
  // @Attribute 读取宿主元素的指定属性(只能读取静态的值)
  // constructor(element: ElementRef, @Attribute('pa-attr-1') bgClass: string){
  //   element.nativeElement.classList.add(bgClass || 'bg-success');
  // }
  constructor(private element: ElementRef){}

  @Input('pa-attr-1')
  bgClass: string;

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