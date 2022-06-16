import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  template: ``
})
export class CoreComponent implements OnInit {

  ngOnInit(): void { }

  protected coin(): boolean {
    return Math.random() > 0.5;
  }

  protected word(): string {
    return this.coin() ? 'Apple' : 'Boat';
  }

}
