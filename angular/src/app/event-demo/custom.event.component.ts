import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-custom-event',
    template: `
        <div class="border border-info">
            <p class="text-info">app-custom-event</p>
            <button (click)="customEvent.emit(foo)">Emit Custom Event.</button>
        </div>
    `
})
export class CustomEventComponent {

    foo: { id: number, name: string } = { id: 1, name: 'this is a custom event' };

    @Output()
    customEvent = new EventEmitter<{ id: number, name: string }>();

}
