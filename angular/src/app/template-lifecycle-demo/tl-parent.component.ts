import { Component, ViewChild, ElementRef } from '@angular/core';
import { TlChildComponent } from './tl-child.component';

@Component({
  selector: 'app-template-demo',
  template: `
    <app-lifecycle-demo
        [someInput]=someValue
    >
      <!--
      HTML elements passed
      - in the content of <app-..>
      - to the nested component
      will be displayed in <ng-content> of the nested component if it exists.
      -->
      <p>Hello.</p>
      <p #localContentReference>This is Content.</p>
    </app-lifecycle-demo>
    <button (click)="someValue = someValue + 'a'">Update someInput.</button>
  `
})
export class TlParentComponent {

  someValue = 'a';

  @ViewChild(TlChildComponent) appEmpty: ElementRef; // will reference first <app-content-demo> , rarely used.


}
