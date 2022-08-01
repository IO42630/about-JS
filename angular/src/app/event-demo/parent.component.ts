import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-demo',
    template: `
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

    someProperty = 0;

    print(foo) {
        console.log(foo);
    }

}
