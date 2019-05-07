import { Directive, Input, HostBinding, OnChanges, SimpleChanges, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: 'input[paModel]',
  exportAs: 'paModel'
})
export class PaModelDirective implements OnChanges {
  direction: string = 'none';
  @Input('paModel')
  modelProperty: string;

  @HostBinding('value')
  fieldValue: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    let change = changes['modelProperty'];
    if(change.currentValue !== this.fieldValue) {
      this.fieldValue = change.currentValue || '';
      this.direction = 'Model';
    }
  }

  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = 'Element';
  }
}