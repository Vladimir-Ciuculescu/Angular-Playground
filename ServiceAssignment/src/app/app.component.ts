import { Component, OnInit } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counter = this.counterService.count;
  }
}
