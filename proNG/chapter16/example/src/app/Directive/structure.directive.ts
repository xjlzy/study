import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[paIf]'
})

export class PaStructureDirective implements OnChanges {
  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>){

  }

  @Input('paIf')
  expressionResult: boolean;

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['expressionResult'];

    if(!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    }
  }

}