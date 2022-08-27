import { Component, ViewChild } from '@angular/core';
import { AuthService } from './auth-demo/auth.service';

@Component({
    selector: 'app-root',
    template: `

        <app-auth-modal #modalx
            [hidden]="auth.isAuthenticated()"></app-auth-modal>
        <div class="container">
            <div class="row align-items-start">
                <div class="col-2">
                    <ul class="nav flex-column">
                        <li class="nav-item" *ngFor="let entry of entries">
                            <!-- "active" is bootstrap specific -->
                            <!-- routerLinkActive applies class if current route contains routerLink -->
                            <a class="nav-link fs-3" routerLink="{{entry.link}}" routerLinkActive="text-success">{{entry.text}}</a>
                        </li>
                        <button type="button" class="btn btn-success" *ngIf="auth.isAuthenticated()"
                            (click)="auth.logout()">Logout
                        </button>
                        <button type="button" class="btn btn-danger" *ngIf="!auth.isAuthenticated()"
                            (click)="modalx.open()">Login
                        </button>
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

    @ViewChild('modalx')
    modalx;

    constructor(
        public auth: AuthService
    ) {}

    entries: { text: string, link: any }[] = [
        { text: 'Heroes', link: '/dashboard' },
        { text: 'Event Demo', link: ['/event-demo'] }, /* alternative notation */
        { text: 'Selector Demo', link: '/selector-demo' },
        { text: 'Databinding Demo', link: '/data-binding-demo' },
        { text: 'Template Demo', link: '/template-demo' },
        { text: 'Services Demo', link: '/services-demo' },
        { text: 'Router Demo', link: '/router-demo' },
        { text: 'Bootstrap Demo', link: '/bootstrap-demo' },
        { text: 'RxJS', link: '/rxjs-demo' },
        { text: 'Forms', link: '/forms-demo' },
        { text: 'Forms Reactive', link: '/forms-demo-reactive' },
        { text: 'Pipes', link: '/pipes-demo' },
        { text: 'Http Client', link: '/http-client-demo' },
        { text: 'Dynamic Component', link: '/dynamic-component-demo' },
        { text: 'Standalone Components Full', link: '/standalone-components-full-demo' },
        { text: 'Standalone Components Mixed', link: '/standalone-components-mixed-demo' },
    ];


}
