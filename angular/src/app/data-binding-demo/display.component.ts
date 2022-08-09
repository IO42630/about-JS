import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display',
    template: `
        <div class="border border-info">
            <p class="text-info">app-display</p>
            <p>{{value}}</p>
        </div>
    `
})
export class DisplayComponent {

    @Input()
    value: string;

}
