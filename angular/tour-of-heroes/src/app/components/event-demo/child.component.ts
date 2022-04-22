import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <app-grandchild
                [someProperty]="someProperty"
                (someEvent)="someEvent.emit($event)"
        >
        </app-grandchild>
    `
})
export class ChildComponent implements OnInit {

    @Input()
    someProperty: number;

    @Output()
    someEvent = new EventEmitter();

    ngOnInit(): void { }

}
