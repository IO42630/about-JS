import { Component, ViewChild, ElementRef } from '@angular/core';
import { TemplateChildComponent } from './template-child.component';

@Component({
    selector: 'app-template-parent',
    template: `
        <div class="border border-warning">
            <p class="text-warning">app-template-parent</p>
            <app-template-child
                [someInput]=someValue
            >
                <p>This is Content.</p>
            </app-template-child>
            <button class="m-4" (click)="someValue = someValue + 'a'">Update someInput.</button>
        </div>
    `
})
export class TemplateParentComponent {

    someValue = 'a';

    @ViewChild(TemplateChildComponent) appEmpty: ElementRef; // will reference first <app-content-demo> , rarely used.


}
