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
export class ParentComponent implements OnInit {

    someProperty = 0;

    ngOnInit(): void { }

}
