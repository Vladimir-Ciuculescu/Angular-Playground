import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription!: Subscription;

  constructor() {}

  // ngOnInit(): void {
  //   this.firstSubscription = interval(1000).subscribe((count) => {
  //     console.log(count);
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.firstSubscription.unsubscribe();
  // }

  ngOnInit(): void {
    const customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval(() => {
        if (count > 3) {
          observer.error(new Error('The value is greater than 3'));
        }
        observer.next(count);
        if (count === 6) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    // customObservable.pipe(
    //   map((data: any) => {
    //     return 'Round' + (data + 1);
    //   })
    // );

    this.firstSubscription = customObservable
      .pipe(
        filter((data: any) => {
          return data > 0;
        }),
        map((data: any) => {
          return 'Round: ' + data;
        })
      )
      .subscribe(
        (count: any) => {
          console.log(count);
        },
        (error: Error) => {
          console.log(error);
        },
        () => {
          console.log('Observable completed !');
        }
      );
  }

  ngOnDestroy(): void {}
}
