import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalEmitter = new EventEmitter<number>();
  number = 0;
  interval: any;

  onStartGame() {
    this.interval = setInterval(() => {
      //this.number++;
      this.intervalEmitter.emit(this.number + 1);
      this.number++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
