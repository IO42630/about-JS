import { Component } from '@angular/core';
import { CoreComponent } from '../util/core.component';

@Component({
    selector: 'app-databinding-demo',
    template: `
        <h4 class="text-warning">STRING INTERPOLATION</h4>
        <p>One {{someString}} {{'Three' + ' Four '}} {{ 5 }}</p>
        <!-- any expression that resolves to string is allowed -->

        <h4 class="text-warning">PROPERTY BINDING</h4>
        <button
            class="btn btn-primary"
            [disabled]="isDisabled"
        >Not Disabled Button
        </button>
        <app-display value="if property is a simple string we can omit the []"></app-display>
        <app-display [value]="'for objects we must use []'"></app-display>

        <h4 class="text-warning">EVENT BINDING</h4>
        <input
            type="text"
            class="form-control"
            onMouseover="console.log('onMouseOver (vanilla event binding)')"
            (input)="displayText($event)"
        >
        <p>{{someText}}</p>

        <h4 class="text-warning">TWO-WAY DATA BINDING</h4>
        <input [(ngModel)]='someText'/>

        <h4 class="text-warning">TRIVIA</h4>
        <a href="https://www.w3schools.com/jsref/dom_obj_event.asp">List of HTML DOM events.</a>
    `
})
export class DatabindingDemoComponent extends CoreComponent {

    isDisabled = false;
    someText = '';
    someString = 'Two';

    displayText(event: Event) {
        console.log('onInput (angular event binding)');
        if (event.target instanceof HTMLInputElement) {
            this.someText = event.target.value;
        }
    }

}
