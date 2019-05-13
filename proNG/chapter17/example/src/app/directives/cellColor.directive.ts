import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: 'td'
})
export class PaCellColorDirective {
  @HostBinding('class')
  bgClass: string = "";
  setColor(dark: boolean) {
    this.bgClass = dark ? 'bg-inverse' : '';
  }
}