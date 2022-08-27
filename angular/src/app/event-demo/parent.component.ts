import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-demo',
    template: `
        <h2>Event Demo</h2>
        <app-child
            [someProperty]="someProperty"
            (someEvent)="someProperty = someProperty + 1"
        >
        </app-child>
        <app-custom-event
            (customEvent)="print($event)"
        >
        </app-custom-event>
    `
})
export class ParentComponent {

    someProperty = 1;

    print(foo) {
        console.log(foo);
    }

}
