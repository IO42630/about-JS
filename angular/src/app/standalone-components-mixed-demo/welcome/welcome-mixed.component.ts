import { Component } from '@angular/core';

/**
 * Standalone Components must be imported.
 */
@Component({
    // imports: [DetailsComponent],
    selector: 'app-welcome',
    template: `
        <section>
            <h1>Welcome to this Demo App!</h1>
            <p>It's all about standalone components.</p>
        </section>
        <app-details></app-details>`
})
export class WelcomeMixedComponent {}
