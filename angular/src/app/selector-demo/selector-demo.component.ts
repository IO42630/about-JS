import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-demo',
  template: `
    <vanilla-selector></vanilla-selector>
    <div element-selector></div>
    <div class="selector-class"></div>
    <!-- selecting ng components by id does not work. -->
  `
})
export class SelectorDemoComponent {}
