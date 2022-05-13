import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  template: `
        <input type="text" #localReferenceToElement>
        <button (click)="onClick(localReferenceToElement)">Click Me.</button>
  `
})
export class TemplateDemoComponent {


  onClick(localReferenceToElement) {
    console.log(localReferenceToElement);
  }

}
