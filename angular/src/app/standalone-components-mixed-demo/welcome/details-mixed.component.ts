import { Component } from '@angular/core';
import { AnalyticsMixedService } from '../shared/analytics-mixed.service';
import { SharedMixedModule } from '../shared/shared-mixed.module';

/**
 * Standalone Compoents must not be declared in any Module.
 */
@Component({
    standalone: true,
    imports: [SharedMixedModule], /* Use non-standalone Component in an standalone Component. */
    selector: 'app-details',
    template: `
        <section (click)="onClick()">
            <h2>What are "Standalone Components"?</h2>
            <p>
                Standalone components are regular Angular components with one important
                twist: They don't require a <code>@NgModule</code> as a wrapper.
            </p>
            <p>
                Instead, you can use them, well, "standalone". They define their own
                dependencies and can be imported and used anywhere.
            </p>
            <p appHighlight>
                It's also not just "standalone components", but also "standalone directives"
                and "standalone pipes".
            </p>
        </section>`,
    styleUrls: ['./details.component.css'],
})
export class DetailsMixedComponent {
    constructor(private analyticsService: AnalyticsMixedService) {}

    onClick() {
        this.analyticsService.registerClick();
    }
}
