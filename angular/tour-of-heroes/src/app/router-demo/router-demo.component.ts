import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth-demo/auth.service';

@Component({
    selector: 'app-router-demo',
    template: `
        <ul class="list-group">
            <li class="list-group-item">
                <a class="nav-link" routerLink="/" routerLinkActive="text-success"
                >"active" because active route contains /.</a>
            </li>
            <li class="list-group-item">
                <a class="nav-link" routerLink="/" routerLinkActive="text-success" [routerLinkActiveOptions]="{exact: true}"
                >"not active" because active route != /.</a>
            </li>
            <li class="list-group-item">
                <button (click)="onClick()">Route Away</button>
            </li>
            <li class="list-group-item">
                <button (click)="onClickWithParams()">Route Away with Params</button>
            </li>
            <li class="list-group-item">
                <a class="nav-link"
                    [routerLink]="['/route-back-demo', 'hello', 'world']"
                    [queryParams]="{ param1: '1', param2: '2'}"
                    fragment="loading"
                    routerLinkActive="text-success"
                >Route Away with Params</a>
            </li>
        </ul>
        <hr>
        <!-- http://localhost:4200/router-demo/hello/world?param1=1&param2=2#loading -->
        <!-- thus -> KEY-R1 -->
        <a class="nav-link"
            [routerLink]="['hello', 'world']"
            [queryParams]="{ param1: '1', param2: '2'}"
            fragment="loading"
            routerLinkActive="text-success"
        >Route Away with Params</a>
        <router-outlet></router-outlet>
    `
})
export class RouterDemoComponent {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
    ) {}

    onClick() {
        this.router.navigate(['/route-back-demo', 'hello', 'world']);
    }

    // contrary to routerLink in template .navigate does now know the current path, thus 'foo' would call '/foo'
    onClick2() {
        this.router.navigate(['foo', {relativeTo: this.route}]); // calls '/router-demo/foo'

    }

    onClickWithParams() {
        this.router.navigate(
            ['/route-back-demo', 'hello', 'world'],
            {
                queryParams: {
                    param1: 'foo',
                    param2: 'bar'
                },
                fragment: 'loading'
            }
        );
    }

}
