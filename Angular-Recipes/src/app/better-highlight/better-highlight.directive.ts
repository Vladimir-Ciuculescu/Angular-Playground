import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor!: string;
  @Input() highlightColor!: string;

  @HostBinding('style.borderColor') borderColor: string = this.highlightColor;
  @HostBinding('style.borderWidth') borderWidth: number = 2;
  @HostBinding('style.borderStyle') borderStyle: string = 'groove';
  @HostBinding('style.borderRadius') borderRadius: string = '10px';

  private renderer!: Renderer2;
  private elementRef!: ElementRef;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    this.renderer = renderer;
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'red'
    );
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.highlightColor
    );
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      this.defaultColor
    );
  }
}
