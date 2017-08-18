import { 
    Directive,
    HostBinding,
    HostListener } from '@angular/core';

@Directive({ selector: '[appRainbow]' })
export class RainbowDirective {
    // public el = null;
    // constructor(element: ElementRef) { this.el = element}

    @HostBinding('style.backgroundColor') color: string;

    @HostListener('mouseover') onMouseOver() {
       this.color = 'yellow';
    }
    @HostListener('mouseout') onMouseOut() {
       this.color = '';
    }
}