import { Component } from '@angular/core';
import { DetailsFullComponent } from './details-full.component';

/**
 * Standalone Components must be imported.
 */
@Component({
  standalone: true,
  imports: [DetailsFullComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeFullComponent {}
