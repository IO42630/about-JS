import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <app-grandchild
            [someAliasForSomeProperty]="someProperty"
            (someEvent)="someEvent.emit($event)"
        >
        </app-grandchild>
    `
})
export class ChildComponent {

    @Input()
    someProperty: number;

    @Output()
    someEvent = new EventEmitter();


}
