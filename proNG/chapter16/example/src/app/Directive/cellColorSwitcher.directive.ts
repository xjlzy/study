import { Directive, Input, ContentChild, OnChanges, SimpleChanges, ContentChildren, QueryList, AfterContentInit } from "@angular/core";
import { PaCellColorDirective } from './cellColor.directive';

@Directive({
  selector: 'table'
})

export class PaCellColorSwitcherDirective implements OnChanges, AfterContentInit {
  @Input('paCellDarkColor')
  modelProperty: boolean;
  @ContentChild(PaCellColorDirective)
  contentChild: PaCellColorDirective;

  @ContentChildren(PaCellColorDirective)
  contentChildren: QueryList<PaCellColorDirective>;

  ngOnChanges(changes: SimpleChanges) {
    // if(this.contentChild != null) {
    //   this.contentChild.setColor(changes.modelProperty.currentValue);
    // }
    this.updateContentChildren(changes.modelProperty.currentValue);
  }

  ngAfterContentInit(): void {
    //this.contentChildren.changes 当匹配到的元素发生变化时调用
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => {
        this.updateContentChildren(this.modelProperty)
      }, 0);
    })
  }

  private updateContentChildren(dark: boolean) {
    if(this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, idx) => {
        child.setColor(idx % 2 ? dark : !dark);
      })
    }
  }

}