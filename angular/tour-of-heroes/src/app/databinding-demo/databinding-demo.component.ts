import { Component } from '@angular/core';
import { CoreComponent } from '../core/core.component';

@Component({
    selector: 'app-databinding-demo',
    template: `
        <!-- STRING INTERPOLATION -->
        <h1>Hello {{someString}}</h1>
        <h1>{{'This also' + ' works! '}} {{ 2 }}</h1> <!-- any expression that resolves to string is allowed -->

        <!-- PROPERTY BINDING -->
        <button
            class="btn btn-primary"
            [disabled]="isDisabled"
        >Text
        </button>
        <app-display value="if property is a simple string we can omit the []"></app-display>
        <app-display [value]="'for objects we must use []'"></app-display>

        <!-- EVENT BINDING -->
        <input
            type="text"
            class="form-control"
            onMouseover="console.log('onMouseOver (vanilla event binding)')"
            (input)="displayText($event)"
        >
        <p>{{someText}}</p>
        <!-- TWO-WAY DATA BINDING -->
        <p [(ngModel)]="someText" ngDefaultControl></p>
    `
})
export class DatabindingDemoComponent extends CoreComponent {

    isDisabled = false;
    someText = '';

    someString = 'World!';


    displayText(event: Event) {
        console.log('onInput (angular event binding)');
        if (event.target instanceof HTMLInputElement) {
            this.someText = event.target.value;
        }
    }

    // for a list of HTML DOM events see: https://www.w3schools.com/jsref/dom_obj_event.asp

}
