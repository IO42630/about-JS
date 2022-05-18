import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-route-back',
    template: `
        <div class="content">
            <button (click)="onClick()">Route Back</button>

            <!-- http://localhost:4200/route-back-demo/hello2/world2 -->
            <!-- -> KEY-R2 -->
            <a [routerLink]="['/route-back-demo', 'hello2', 'world2']">Route to World 2.</a>
            <!-- assuming we are in nested, thus -->
            <!-- http://localhost:4200/router-demo/hello/world?param1=1&param2=2#loadin -->
            <!-- there seems to be no way to change the routeParams hello/world -->
            <!-- in a relative manner (without implicitly indicating the entire route) -->
            <!-- but we still can stay on the current route -->
            <!-- and update the queryParams. -->
            <a routerLink="./"
                [queryParams]="{ param1: '11', param2: '22'}"
            >Route to NESTED World 2.</a>
            <table class="table">
                <tbody>
                <tr>
                    <td>routeParams</td>
                    <td>{{prettyPrint(this.routeParams)}}</td>
                </tr>
                <tr>
                    <td>queryParams</td>
                    <td>{{prettyPrint(this.queryParams)}}</td>
                </tr>
                </tbody>

            </table>

        </div>

    `
})
export class RouteBackComponent implements OnInit {

    id1: any;
    id2: any;
    routeParams: { [key: string]: any };
    queryParams: { [key: string]: any };


    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    onClick() {
        this.router.navigate(['/router-demo']);
    }

    ngOnInit(): void {
        console.log(this.route.snapshot);
        this.id1 = this.route.snapshot.params['id1'];
        this.id2 = this.route.snapshot.params['id2'];
        // above code will only execute when we create the component
        // thus not if we 'navigate' without leaving the component (hello world 2)
        this.route.params.subscribe(
            (params: Params) => this.routeParams = params
        );
        this.route.queryParams.subscribe(
            (params: Params) => this.queryParams = params
        );
    }

    prettyPrint(obj: any): string {
        return JSON.stringify(obj, undefined, 2);
    }
}
