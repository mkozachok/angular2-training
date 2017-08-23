import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

    constructor(private el: ElementRef) {
    }

    @HostBinding('style.backgroundColor') color: string;

    @HostListener('click') onClick() {
       this.color = 'yellow';
       this.increaseFontSize();
    }
    
    increaseFontSize() {
      this.el.nativeElement.style.fontSize = "25px";
    }
}
