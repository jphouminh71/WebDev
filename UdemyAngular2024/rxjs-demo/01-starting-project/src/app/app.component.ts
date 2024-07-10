import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal<number>(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });

  // manually constructing an observable
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;

    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
      }
      subscriber.next({ message: 'new value' });
      timesExecuted++;
    }, 2000);
  });

  constructor() {
    // converts property to an observable
  }

  ngOnInit(): void {
    const subscription = this.clickCount$.subscribe({
      next: () => console.log(`Clicked button ${this.clickCount()} times.`),
    });

    const customIntervalSubscription = this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('COMPLETED !'),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      customIntervalSubscription.unsubscribe();
    });
  }

  onClick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }
}

/*
  Pipe() lets you add operators to emitted observable items
  subscriptions can only be setup in the onInit lifecycle
  Always cleanup your subscriptions.
  Obersvables can also throw erorrs.

  Main functionality is that they are able to accept subscribers and will pass
  - next
  - complete
  - error
  values.

  This is kind of awesome.
*/
