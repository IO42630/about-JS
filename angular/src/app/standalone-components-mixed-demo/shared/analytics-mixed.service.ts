import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnalyticsMixedService {
  registerClick() {
    console.log('Clicked!');
  }
}
