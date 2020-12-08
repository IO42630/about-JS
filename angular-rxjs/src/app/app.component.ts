import {Component, OnInit} from '@angular/core';
import {asyncScheduler, BehaviorSubject, from, fromEvent, interval, Observable, of, Subject, Subscriber, Subscription, timer} from 'rxjs';
import {
    buffer,
    bufferCount, catchError,
    combineLatest,
    debounceTime,
    delay,
    filter,
    map, merge,
    mergeMap,
    scan,
    share,
    shareReplay,
    switchMap,
    take, takeUntil, takeWhile,
    tap,
    throttleTime
} from 'rxjs/operators';





@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
    title = 'angular-rxjs';


    ngOnInit() {

        function print(x) { return console.log(x); } // helper print


        let subscription0: Subscription;
        let subscription1: Subscription;
        let observable0: Observable<any>;
        let observable1: Observable<any>;
        let observable2: Observable<any>;
        let subject0 : Subject<any>;


        // INTRO ====================

        // an observable emits events (can be done in many ways)
        // a subscription is created by subscribing to an observable
        // an observer can be .completed (closed)
        // a subscription can be .unsubscribed

        observable0 = Observable.create(observer => {
            observer.next('A');  // manually creating an observable
            observer.next('B');  // emitting 3 events
            observer.complete(); // closes the observable
            observer.next('C');  // C is never emitted
        });

        subscription0 = observable0.subscribe(print); // print function will be called every time the Observable emits a value.
        subscription0.unsubscribe();

        observable0= of('hello');
        subscription0 = observable0.subscribe(x => console.log(x)); // prints word

        observable0 = from('hello');
        subscription0 = observable0.subscribe(print); // prints each letter
        subscription0.unsubscribe();

        observable0 = interval(500); // emits a increasing number each 500ms
        subscription0 = observable0.pipe(takeUntil(timer(2000))).subscribe(print);
        subscription0.unsubscribe();


        // SCHEDULERS =============

        // hello3 world3
        observable0 = of('hello3');
        subscription0 = observable0.subscribe(x => console.log(x));
        print('world3');

        // world4 hello4 (asyncScheduler executes the subscription on the next event loop)
        const hello4 = of('hello4', asyncScheduler);
        hello4.subscribe(x => console.log(x));
        print('world4');


        // HOT (multi) vs COLD (single) ===========

        // cold observables don't create the underlying value until they are subscribed to

        let cold = Observable.create(x => x.next(Math.random()));
        subscription0 = cold.subscribe(x => console.log(x));
        subscription1 = cold.subscribe(x => console.log(x)); // two separate random values

        // how to make cold observer hot
        let hot = cold.pipe(share());
        subscription0 = hot.subscribe(x => console.log('foo ' + x));
        subscription0 = hot.subscribe(x => console.log('bar ' + x)); // only first subscriber gets value


        // cache the last value
        hot = cold.pipe(shareReplay(1));
        subscription0 = hot.subscribe(x => console.log('foo ' + x));
        subscription1 = hot.subscribe(x => console.log('bar ' + x)); // both get the same random number


        // Instead of making cold observables hot - create subjects.
        // Subjects are hot & can have values pushed to them after they are created
        subject0= new Subject();
        subscription0 = subject0.subscribe(print); // subscription must happen before events are pushed
        subject0.next('foo');                      // new event is pushed
        subscription1 = subject0.subscribe(print); // catches nothing , because subscribed after the values were added

        // BehaviorSubject
        // last value will be cached
        let bs = new BehaviorSubject('foo');
        subscription0 = bs.subscribe(print); // catches foo bar
        bs.next('bar');
        subscription1 = bs.subscribe(print); // catches bar


        // OPERATORS =================

        observable0 = from([1, 2, 3, 4]);
        observable1 = observable0.pipe();
        observable1 = observable0.pipe(map(x => 2 * x));
        observable2 = observable0.pipe(scan((acc, val) => acc + val));
        // how would one go about adding all of the values

        observable1.subscribe(print);
        observable2.subscribe(print).unsubscribe();

        observable2 = observable1.pipe(filter(x => x > 10));
        observable2.subscribe(print).unsubscribe();

        // take 3 , then complete the observable
        observable2 = observable1.pipe(take(3));
        observable2.subscribe(print);


        // chain and tap
        // tap gets called each time .next is called
        print('chain and tap');
        observable2 = observable0.pipe(
            map(v => v),
            tap(print),
            map(x => x));
        observable2.subscribe(print);


        // BACKPRESSURE ============

        // more values are generated, that can reasonably be used
        observable0 = fromEvent(document, 'mousemove');
        observable1 = observable0.pipe(debounceTime(1000)); // filter events, until they have stopped happening
        subscription1 = observable1.subscribe();
        subscription1.unsubscribe();

        observable1 = observable0.pipe(throttleTime(1000)); // get first event, wait, get next event (next == current or next in buffer?)


        observable1 = observable0.pipe(bufferCount(20)); // collect 20 events then emit them


        // SWITCHMAP
        let user : Observable<any> = of('userName');

        // this is a func that returns observables
        let fetchOrders = (userID) => {
            return of((userID+ ' orders')) ;
        };

        // bad pattern
        user.subscribe(_user => {
            fetchOrders(_user).subscribe(print);
        });

        // good pattern
        let userOrders1 = user.pipe(
            switchMap(_user => {return fetchOrders(_user);})
        );

        userOrders1.subscribe(print);


        // COMBINING ==============

        observable1 = Observable.create(o => o.next(Math.random())); // cold obs
        let delayed :Observable<any> = observable1.pipe(delay(1000)); //

        // wait for all observables to emit a value, then print
        // wait fo r a change in one of the observes, then emit
        let combo = combineLatest([
            delayed,
            observable1,
            observable1,
        ])

        // merge
        // will emit any of the 3 values as they come, first in
        let merged = merge(
            delayed,
            observable1,
            observable1,
        )





        // ERRORS
        subject0 = new Subject();
        subject0.pipe(
            catchError(err => of('error occurred')),
            // retry(2);
        ).subscribe(print);

        subject0.next('good');
        subject0.error('error');

        // MEMORY LEAKS
        observable1 = interval(100);

        subscription0 = observable1.subscribe( v => {
            print(v);
            if (v >= 10){
                subscription0.unsubscribe();
            }
        });


        // Better
        observable2 = observable1.pipe(takeWhile(v => v<=10));
        subscription0 = observable2.subscribe(print);

        // better 2
        observable2 = observable1.pipe(takeUntil(timer(1000)));

    }

    constructor() {
        document.addEventListener('keyup', x => {
            console.log('keys pressed');
        });

        let i = 0;

        const delayEvent = fromEvent(document, 'click');

        const mergedEvents = delayEvent.pipe(mergeMap(value => of(value).pipe(delay(1000))));


        // const moreDelay = mergedEvents.pipe(delay(1000));

        mergedEvents.subscribe(output => {console.log(++i); });

    }


}

