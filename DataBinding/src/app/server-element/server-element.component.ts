import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  @Input('serverElement') element: {
    name: string;
    type: string;
    content: string;
  };
  @Input() name: string;
  @ContentChild('paragraphContent') paragraph: ElementRef;

  constructor() {
    console.log(1);
  }

  ngOnInit() {
    console.log(2);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(3);
    console.log(changes);
  }

  ngDoCheck() {
    console.log('Do check');
  }
  ngAfterContentInit() {
    console.log('Ng after content init !');
    console.log('222', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('after check');
  }

  ngAfterViewChecked(): void {}

  ngAfterViewInit(): void {
    console.log(this.paragraph);
  }

  ngOnDestroy(): void {
    console.log('component destroyed !');
  }
}
