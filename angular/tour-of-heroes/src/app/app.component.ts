import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="container">
            <div class="row align-items-start">
                <div class="col-2">
                    <ul class="nav flex-column">
                        <li class="nav-item" *ngFor="let entry of entries">
                            <!-- "active" is bootstrap specific -->
                            <!-- routerLinkActive applies class if current route contains routerLink -->
                            <a class="nav-link fs-3" routerLink="{{entry.link}}" routerLinkActive="text-success">{{entry.text}}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-10">
                    <router-outlet></router-outlet> <!-- This seems to be the section which changes depending on current URL. -->
                </div>
            </div>
        </div>
    `
})
export class AppComponent {

    entries: { text: string, link: any }[] = [
        {text: 'Dashboard', link: '/dashboard'},
        {text: 'Heroes', link: '/heroes'},
        {text: 'Event Demo', link: ['/event-demo']}, /* alternative notation */
        {text: 'Selector Demo', link: '/selector-demo'},
        {text: 'Databinding Demo', link: '/databinding-demo'},
        {text: 'Template Lifecycle Demo', link: '/template-lifecycle-demo'},
        {text: 'Services Demo', link: '/services-demo'},
        {text: 'Router Demo', link: '/router-demo'},
    ];


}
