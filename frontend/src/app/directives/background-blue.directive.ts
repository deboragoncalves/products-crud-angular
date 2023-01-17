import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundBlue]'
})
export class BackgroundBlueDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = "#3F51B5";
  }

}
