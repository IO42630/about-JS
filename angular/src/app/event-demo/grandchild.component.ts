import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grandchild',
    template: `
        <div class="border border-info">
            <p class="text-info">app-grandchild</p>
            <div>{{someProperty}}</div>
            <button (click)="someEvent.emit($event)">SomeButton</button>
            <button (click)="customEvent.emit({id: 1, name: 'name'})">SomeButton</button>
        </div>
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
