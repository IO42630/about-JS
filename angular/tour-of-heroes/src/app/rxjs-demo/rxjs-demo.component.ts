import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  template: `
    <p>
      rxjs-demo works!
    </p>
  `,
  styles: [
  ]
})
export class RxjsDemoComponent implements OnInit, OnDestroy {

  someSub: Subscription;

  ngOnInit(): void {
    this.someSub = new Observable().subscribe();
  }

  ngOnDestroy() {
    this.someSub.unsubscribe(); // ng will do this by default fro route observables,
    // but user defined observables unsub manually here.
  }


}
