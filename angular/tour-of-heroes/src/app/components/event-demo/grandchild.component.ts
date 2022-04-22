import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grandchild',
    template: `
        <div>{{someProperty}}</div>
        <button (click)="someEvent.emit($event)">SomeButton</button>
    `
})
export class GrandchildComponent implements OnInit {

    @Input()
    someProperty: number;

    @Output()
    someEvent = new EventEmitter();

    ngOnInit(): void { }

}
