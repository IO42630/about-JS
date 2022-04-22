import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-demo',
    template: `
        <app-child
                [someProperty]="someProperty"
                (someEvent)="someProperty = someProperty + 1"
        >
        </app-child>
    `
})
export class EventDemoComponent implements OnInit {

    someProperty: number = 0;

    ngOnInit(): void { }

}
