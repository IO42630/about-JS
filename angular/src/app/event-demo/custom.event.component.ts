import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-custom-event',
    template: `
        <div class="border border-info">
            <p class="text-info">app-custom-event</p>
            <button (click)="customEvent.emit(foo)">Print Me!</button>
        </div>
    `
})
export class CustomEventComponent {

    foo: { id: number, name: string };

    @Output()
    customEvent = new EventEmitter<{ id: number, name: string }>();

}
