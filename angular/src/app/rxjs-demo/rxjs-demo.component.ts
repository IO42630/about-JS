import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, fromEvent, of, Subject, Observer, from, interval, timer, asyncScheduler, BehaviorSubject } from 'rxjs';
// tslint:disable-next-line:max-line-length
import { mergeMap, delay, takeUntil, share, shareReplay, map, scan, filter, take, tap, debounceTime, throttleTime, bufferCount, switchMap, combineLatest, merge, catchError, takeWhile } from 'rxjs/operators';


export function print(x, y?) {
    return console.log(x + (y ? y : '')); // helper
}

@Component({
    selector: 'app-rxjs-demo',
    template: `
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-light" (click)="intro()">Intro</button>
            <button type="button" class="btn btn-light" (click)="basic()">Basic</button>
            <button type="button" class="btn btn-light" (click)="schedulers()">Schedulers</button>
            <button type="button" class="btn btn-light" (click)="hotVsCold()">Hot vs. Cold</button>
            <button type="button" class="btn btn-light" (click)="subjectDemo()">Subject</button>
            <button type="button" class="btn btn-light" (click)="operators()">Operators</button>
            <button type="button" class="btn btn-light" (click)="switchMap()">SwitchMap</button>
            <button type="button" class="btn btn-light" (click)="backpressure()">Backpressure</button>
            <button type="button" class="btn btn-light" (click)="combine()">Combine</button>
            <button type="button" class="btn btn-light" (click)="errors()">Errors</button>
            <button type="button" class="btn btn-light" (click)="memLeak()">Mem Leak</button>
            <button type="button" class="btn btn-light" (click)="magic()">Magic</button>
        </div>
    `,
    styles: []
})
export class RxjsDemoComponent implements OnInit, OnDestroy {

    someSub: Subscription;

    ngOnInit(): void {
        this.someSub = new Observable().subscribe();
    }

    ngOnDestroy() {
        this.someSub.unsubscribe(); // ng will do this by default fro route oses,
        // but user defined Observers unsub manually here.
    }

    intro() {
        console.clear();
        // an obs emits events (can be done in many ways)
        // a subscription is created by subscribing to an ose
        // an observer can be .completed (closed)
        // a subscription can be .unsubscribed

        // manually creating an Observable
        let obsle = new Observable((obs: Observer<any>) => {
            obs.next('A');  // emitting event
            obs.next('B');  // emitting event
            obs.complete(); // closes the obs // can be used as part of ose loop logic
            obs.next('C');  // C is never emitted
        });

        let sub = obsle.subscribe(print); // print function will be called for each time the Observable emits a value.
        sub = obsle.subscribe(print); // the values are not exhausted. Rather this will print A B again.
        sub.unsubscribe(); // it is good practice to unsubscribe after parsing the events.
        sub = obsle.subscribe(print); // however this does not prevent us from subscribing again.

        obsle = of('hello');
        sub = obsle.subscribe(print); // prints word
        sub.unsubscribe();
    }

    basic() {
        console.clear();
        from('hello').subscribe(print).unsubscribe(); // prints each letter
        // emits a increasing number each 500ms
        interval(500).pipe(takeUntil(timer(2000))).subscribe(print); // do not unsub or it will never trigger.
    }

    schedulers() {
        // hello3 world3
        console.clear();
        of('hello3').subscribe(print);
        print('world3');

        // world4 hello4 (asyncScheduler executes the subscription on the next event loop)
        of('hello4', asyncScheduler).subscribe(print);
        print('world4');
    }

    hotVsCold() {
        // HOT (multi) vs COLD (single) ===========
        console.clear();
        // cold oses don't create the underlying value until they are subscribed to
        const cold = new Observable(x => x.next(Math.random()));
        cold.subscribe((y) => print('cold ', y));
        cold.subscribe((x) => print('cold ', x)); // two separate random values

        // how to make cold observer hot
        let hot = cold.pipe(share());
        hot.subscribe((x) => print('hot  ', x));
        hot.subscribe((x) => print('hot  ', x)); // only first subscriber gets value

        // cache the last value
        hot = cold.pipe(shareReplay(1));
        hot.subscribe((x) => print('hot shared ', x));
        hot.subscribe((x) => print('hot shared ', x)); // both get the same random number
    }

    subjectDemo() {
        console.clear();
        // Instead of making cold oses hot - create subjects.
        // Subjects are hot & can have values pushed to them after they are created
        const sj = new Subject();
        sj.subscribe(print); // subscription must happen before events are pushed
        sj.next('foo');      // new event is pushed
        sj.subscribe(print); // catches nothing , because subscribed after the values were added

        // BehaviorSubject
        // last value will be cached
        const bsj = new BehaviorSubject('foo');
        bsj.subscribe(print); // -> foo bar
        bsj.next('bar');
        bsj.subscribe(print); // -> bar
    }

    operators() {
        console.clear();
        const ose0: Observable<any> = from([1, 2, 3, 4]);
        ose0.pipe()
            .pipe(map(x => 2 * x))
            .subscribe(print).unsubscribe();

        ose0.pipe(scan((acc, val) => acc + val)).subscribe(print).unsubscribe();

        ose0.pipe(filter(x => x > 5)).subscribe(print).unsubscribe();

        // take 3 , then complete the ose
        ose0.pipe(take(3)).subscribe(print).unsubscribe();

        // chain and tap
        // tap gets called each time .next is called
        print('chain and tap');
        ose0.pipe(
            map(v => v),
            tap(print),
            map(x => x)
        ).subscribe(print);
    }

    switchMap() {
        console.clear();
        const uNameOse = of('uName');
        // this is a func that returns oses
        const fetchOrders = (uName) => of((uName + ' orders'));
        // bad pattern
        uNameOse.subscribe(u => fetchOrders(u).subscribe(print));
        // good pattern
        uNameOse.pipe(switchMap(u => fetchOrders(u))).subscribe(print);
    }

    /**
     * more values are generated, that can reasonably be used
     */
    backpressure() {
        console.clear();
        const ose0 = fromEvent(document, 'mousemove');
        // filter events, until they have stopped happening
        ose0.pipe(debounceTime(1000)).pipe(take(10)).subscribe(() => print('debounce')).unsubscribe();
        // get first event, wait, get next event (next == current or next in buffer?)
        ose0.pipe(throttleTime(1000)).pipe(take(100)).subscribe(() => print('throttle')).unsubscribe();
        // collect 20 events then emit them
        ose0.pipe(bufferCount(20)).pipe(take(100)).subscribe(() => print('buffer')).unsubscribe();
    }

    combine() {
        console.clear();
        const ose = new Observable(x => x.next(Date.now() + '-' + Math.random())); // cold obs
        const delayed = ose.pipe(delay(1000)); //

        // wait for all oses to emit a value, then emit
        const combo = combineLatest(delayed, ose, ose);
        of('combo').pipe(combo).subscribe(print);

        // will emit any of the 3 values as they come
        const merged = merge(delayed, ose, ose);
        of('merged').pipe(merged).subscribe(print);
    }

    errors() {
        // handle data
        // handle error
        // handle completion
        console.clear();
        const sj = new Subject();
        sj.pipe(catchError(() => of('error occurred')))
            .subscribe(print);
        sj.next('good');
        sj.error('error');

        // Observer is a weird term - it basically means the logic that the Observer will effectively execute by observing the Observable
        const ose = new Observable((obs: Observer<any>) => {
            obs.next('hello');
            obs.error(new Error('error'));
            obs.next('world'); // error cancels the obs (no next/completion happens)
            obs.complete();
        });

        ose.subscribe(
            data => console.log(data),
            (error: Error) => console.error(error.message),
            () => console.log('complete hook is never exe')
        );
    }

    memLeak() {
        console.clear();
        const ose1 = interval(100);
        const subscription0 = ose1.subscribe(v => {
            print(v);
            if (v > 5) {
                subscription0.unsubscribe();
            }
        });
        ose1.pipe(takeWhile((v) => v < 5)).subscribe(print);
        ose1.pipe(takeUntil(timer(500))).subscribe(print);
    }

    magic() {
        console.clear();
        const clickOse = fromEvent(document, 'click');
        clickOse.pipe(mergeMap(value => of(value).pipe(delay(1000))))
            .subscribe(print);
    }

}
