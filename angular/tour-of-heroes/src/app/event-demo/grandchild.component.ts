import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grandchild',
    template: `
        <div>{{someProperty}}</div>
        <button (click)="someEvent.emit($event)">SomeButton</button>
        <button (click)="customEvent.emit({id: 1, name: 'name'})">SomeButton</button>
    `
})
export class GrandchildComponent {

    foo: { id: number, name: string };

    @Input('someAliasForSomeProperty')
    someProperty: number;

    @Output()
    someEvent = new EventEmitter();

    @Output()
    customEvent = new EventEmitter<{ id: number, name: string }>();


}
