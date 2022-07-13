import { Directive,Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input() color: string = '';

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.color = 'green'
   }

}
