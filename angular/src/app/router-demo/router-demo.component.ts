import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth-demo/auth.service';
import { CanExit } from '../auth-demo/exit-guard.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-router-demo',
    template: `
        <ul class="list-group">
            <li class="list-group-item">
                <a class="nav-link" routerLink="/" routerLinkActive="text-success">
                    "active" because active route contains /.</a>
                <a class="nav-link" routerLink="/" routerLinkActive="text-success" [routerLinkActiveOptions]="{exact: true}">
                    "not active" because active route != /.</a>
            </li>
            <li class="list-group-item">
                <button (click)="onClick()">Route *Away*</button>
                <button (click)="onClickWithParams()">Route *Away* with Params</button>
                <button (click)="onClickNested()">Route *Nested*</button>
            </li>
            <li class="list-group-item">
                <a class="nav-link"
                    [routerLink]="['/route-back-demo', 'hello', 'world']"
                    [queryParams]="{ param1: '1', param2: '2'}"
                    fragment="loading"
                    routerLinkActive="text-success">
                    Route *Away* with Params</a>
                <!-- http://localhost:4200/router-demo/hello/world?param1=1&param2=2#loading -->
                <!-- thus -> KEY-R1 -->
                <a class="nav-link"
                    [routerLink]="['hello', 'world']"
                    [queryParams]="{ param1: '1', param2: '2'}"
                    fragment="loading"
                    routerLinkActive="text-success">
                    Route *Nested* with Params</a>
            </li>
        </ul>
        <div class="border border-info">
            <p class="text-info">(Nested) router-outlet</p>
            <router-outlet></router-outlet>
        </div>
    `
})
export class RouterDemoComponent implements CanExit {

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private auth: AuthService,
    ) {}


    onClick() {
        this.router.navigate(['/route-back-demo', 'hello', 'world']);
    }

    // contrary to routerLink in template .navigate does now know the current path, thus 'foo' would call '/foo'
    onClickNested() {
        this.router.navigate(['hello', 'world'], {relativeTo: this.route}); // calls '/router-demo'
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

    /* GUARD LOGIC (see auth-demo) */

    canExit(currentState, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return !!nextState && nextState.url.includes('route-back');
    }


}
