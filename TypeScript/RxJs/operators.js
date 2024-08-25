"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// Point of this is to understand chain operators to our observables.
// Map(), this function will hold the logic for transforming data coming down the pipe.
var observable = (0, rxjs_1.interval)(1000);
var observer = {
    next: function (value) {
        console.log(value);
    },
};
observable
    .pipe((0, rxjs_1.map)((value) => value * 2), (0, rxjs_1.throttleTime)(2000))
    .subscribe(observer);
