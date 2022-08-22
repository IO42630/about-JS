import { Component } from '@angular/core';
import {DetailsComponent} from './details/details.component';

/**
 * Standalone Components must be imported.
 */
@Component({
  // imports: [DetailsComponent],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {}
