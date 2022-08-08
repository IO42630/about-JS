import { Directive, ViewContainerRef } from '@angular/core';

// use camelCase for directives.
@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}
