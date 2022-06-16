import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appUnless]'
})
export class UnlessDirective {

    @Input()
    set appUnless(condition: boolean) {
        // can supply  setter instead of property
        if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private vcRef: ViewContainerRef /* where did we place the component */
    ) { }

}
