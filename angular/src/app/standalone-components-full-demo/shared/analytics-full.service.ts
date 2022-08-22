import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsFullService {
  registerClick() {
    console.log('Clicked!');
  }
}
