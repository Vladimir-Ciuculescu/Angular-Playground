import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CockpitComponent {
  //You can create aliases for both Input and Output
  @Output('serverEvent') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContent', { static: true }) serverReference: ElementRef;

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    console.log(this.serverReference);
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
