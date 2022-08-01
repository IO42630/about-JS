import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-grandchild',
    template: `
        <div class="border border-info">
            <p class="text-info">app-grandchild</p>
            <div>{{someProperty}}</div>
            <button (click)="someEvent.emit($event)">Add Me!</button>
        </div>
    `
})
export class GrandchildComponent {

    @Input('someAliasForSomeProperty')
    someProperty: number;

    @Output()
    someEvent = new EventEmitter();

}
