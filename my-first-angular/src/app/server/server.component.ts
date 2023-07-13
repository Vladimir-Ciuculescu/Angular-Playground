import { Component } from '@angular/core';

@Component({
  selector: 'server-component',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  visible = true;
  logs = [];
  count = 0;

  onToggleVisible() {
    this.visible = !this.visible;
  }

  onIncrementLog() {
    this.count++;
    this.logs = [...this.logs, this.count];
  }
}
