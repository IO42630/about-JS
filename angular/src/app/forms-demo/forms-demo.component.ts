import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  templateUrl: 'forms-demo.component.html',
  styles: []
})
export class FormsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

}
