import { interval, map, throttle, throttleTime } from "rxjs";
import { Observable } from "rxjs";

// Point of this is to understand chain operators to our observables.

// Map(), this function will hold the logic for transforming data coming down the pipe.

var observable: Observable<number> = interval(1000);
var observer = {
  next: function (value: number) {
    console.log(value);
  },
};

observable
  .pipe(
    map((value: number) => value * 2),
    throttleTime(2000)
  )
  .subscribe(observer);
