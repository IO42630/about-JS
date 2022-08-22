import { Component } from '@angular/core';
import { AnalyticsFullService } from '../shared/analytics-full.service';
import { SharedFullModule } from '../shared/shared-full.module';

/**
 * Standalone Compoents must not be declared in any Module.
 */
@Component({
    standalone: true,
    imports: [SharedFullModule], /* Use non-standalone Component in an standalone Component. */
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
        </section>
    `,
    styleUrls: ['./details.component.css'],
})
export class DetailsFullComponent {
    constructor(private analyticsService: AnalyticsFullService) {
    }

    onClick() {
        this.analyticsService.registerClick();
    }
}
