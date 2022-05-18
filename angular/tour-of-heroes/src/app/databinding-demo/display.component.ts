import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-display',
    template: `
        <p>{{value}}</p>
    `
})
export class DisplayComponent {

    @Input()
    value: string;

}
