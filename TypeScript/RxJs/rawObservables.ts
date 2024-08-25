/*
    Takeaways from this example. 
    - observables are postfixed with $ 
    - observers can publish 3 types of values. next | complete | error
    - observables can define their own custon unsubscribe implementation by return a function in the subscription definition
    - subscribers can choose to to which values they want to to pay attention to when subscribing to an observer. 
    - observables make asynchronous code synchronous 
*/

import { Observable, interval } from "rxjs";

class ForeverPublisher {
  // define observable
  private foreverPublishObject$: Observable<string>;

  constructor() {
    // Creating the subsriber implementation.
    this.foreverPublishObject$ = new Observable((subscriber) => {
      try {
        const interval = setInterval(() => {
          subscriber.next("A message from the publishObject!");
        }, 1000);
        // return custom unsubscribe logic
        return function unsubscribe() {
          console.log("clearing interval");
          clearInterval(interval);
        };
      } catch (error) {
        subscriber.error(error);
      }
    });
  }

  getPublishObject(): Observable<string> | undefined {
    return this.foreverPublishObject$;
  }
}

class Publisher {
  // define observable
  private publishObject: Observable<string>;

  constructor() {
    this.publishObject = new Observable((subscriber) => {
      try {
        subscriber.next("A message from the publishObject!");
        subscriber.complete();
      } catch (error) {
        subscriber.error(error);
      }
    });
  }

  getPublishObject(): Observable<string> | undefined {
    return this.publishObject;
  }
}

class subscriber {
  subscribeToPublishObject() {
    let count = 0;
    let maxCount = 5;
    //const pubObject = new Publisher();
    const pubObject = new ForeverPublisher();

    console.log("Im going to subscribe to the publisher!");

    const observable$ = pubObject.getPublishObject();
    const subscription = observable$?.subscribe({
      next: (response) => {
        console.log(response);

        if (count >= maxCount) {
          subscription?.unsubscribe();
        }
        count++;
      },
      complete: () => {
        console.log("Got a completion notification.");
        console.log("I finished subscribing!");
        subscription?.unsubscribe();
      },
    });
  }
}

console.log("RAW OBSERVABLES");
console.log("-------------------");
const subscriberObject = new subscriber();
subscriberObject.subscribeToPublishObject();
console.log("FINISH");
