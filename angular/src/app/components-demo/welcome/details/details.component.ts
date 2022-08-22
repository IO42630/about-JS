import { Component } from '@angular/core';
import {AnalyticsService} from '../../shared/analytics.service';
import {SharedFooModule} from '../../shared/shared-foo.module';

/**
 * Standalone Compoents must not be declared in any Module.
 */
@Component({
  standalone: true,
  imports: [SharedFooModule], /* Use non-standalone Component in an standalone Component. */
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
