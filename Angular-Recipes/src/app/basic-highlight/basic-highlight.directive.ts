import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class BasicHighLightDirective implements OnInit {
  private elementRef!: ElementRef;

  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
