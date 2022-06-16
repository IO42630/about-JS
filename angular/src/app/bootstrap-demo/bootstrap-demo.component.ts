import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-demo',
  templateUrl: 'bootstrap-demo.component.html',
  styles: [
  ]
})
export class BootstrapDemoComponent implements OnInit {

  selected: string;

  constructor() { }

  ngOnInit(): void {
    this.selected = 'forms';
  }

}
