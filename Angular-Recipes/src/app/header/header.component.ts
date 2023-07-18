import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'ceva';
  @Output() onPathSelected = new EventEmitter<string>();

  onSelect(path: string) {
    this.onPathSelected.emit(path);
  }
}
