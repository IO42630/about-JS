import { Component } from '@angular/core';
import { CoreComponent } from '../core/core.component';

@Component({
    selector: 'app-directives-demo',
    templateUrl: './directives-demo.component.html',
    styles: [`.some-class { color: white}`]
})
export class DirectivesDemoComponent extends CoreComponent {

    coinResult = this.coin();

    someStrings: string[] = [];

    value = 10;


    rngColor(): string {
        return this.coinResult ? 'red' : 'green';
    }


}
