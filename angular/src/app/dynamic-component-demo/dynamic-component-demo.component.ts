import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from './placeholder.directive';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'app-dynamic-component-demo',
  template: `
    <button
        (click)="show = true">Show
    </button>
    <app-alert
        *ngIf="show"
        [message]="'ERROR'"
        (close)="show = false"
    ></app-alert>
    <button
        (click)="showErrorAlert('hello')">Show Imperative Dynamic Popup
    </button>
    <div #addHere></div> <!--   this creates a 'reference' for ng - can also be used as pointer to insert component into. -->
    <ng-template appPlaceholder></ng-template> <!-- does not render a real component [1]-->
  `

})
export class DynamicComponentDemoComponent {

  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective; // well map to [1]

  constructor(
      private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  show = false;
  private closeSub: Subscription;


  showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent(); // does not work, this would be plain JS component, but NG needs wiring etc.
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
        AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
