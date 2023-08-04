import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService) {}

  userActivated: string = '';
  private activatedSubscription!: Subscription;

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      (data) => {
        this.userActivated = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.activatedSubscription.unsubscribe();
  }
}
