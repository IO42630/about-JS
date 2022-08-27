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

/**
 * Each Component has a selector. There are at least 3 variations:
 * Vanilla: app-selector-demo > vanilla-selector
 * Element: app-selector-demo > div:nth-child(2)
 * Class:   app-selector-demo > div.selector-class
 */
