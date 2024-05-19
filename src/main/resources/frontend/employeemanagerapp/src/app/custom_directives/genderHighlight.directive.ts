import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[genderHighlight]',
})
export class genderHighlight {
  constructor(private el: ElementRef) {}
  @Input() defaultColor: string;
  @Input('genderHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || '#CDCCFF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null!);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
