import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
    selector: 'app-route-back',
    template: `
        <div class="content">
            <div class="row">
                <div class="col-sm">
                    <button (click)="onClick()">Route Back</button>
                </div>
                <div class="col-sm">
                    <!-- http://localhost:4200/route-back-demo/hello2/world2 -->
                    <!-- -> KEY-R2 -->
                    <a [routerLink]="['/route-back-demo', 'hello2', 'world2']">Route *Away* to World 2.</a>
                </div>
                <div class="col-sm">
                    <a [routerLink]="['/route-back-demo', 'hello2']">Route *Away* to World Placeholder.</a>
                </div>
                <div class="col-sm">
                    <!-- Assuming we are in nested, thus -->
                    <!-- http://localhost:4200/router-demo/hello/world?param1=1&param2=2#loadin .-->
                    <!-- There seems to be no way to change the routeParams hello/world -->
                    <!-- in a relative manner (without implicitly indicating the entire route). -->
                    <!-- But we still can stay on the current route, and update the queryParams. -->
                    <a routerLink="./"
                        [queryParams]="{ param1: '11', param2: '22'}"
                    >Route *Relative* to World 2.</a>
                </div>
            </div>
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
                <tr>
                    <td>data</td>
                    <td>{{prettyPrint(this.data)}}</td>
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
    data: { [key: string]: any };

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    onClick() {
        this.router.navigate(['/router-demo']);
    }

    ngOnInit(): void {
        console.log(this.route.snapshot);
        this.id1 = this.route.snapshot.params.id1;
        this.id2 = this.route.snapshot.params?.id2;
        // above code will only execute when we create the component
        // thus not if we 'navigate' without leaving the component (hello world 2)
        this.route.params.subscribe(
            (params: Params) => this.routeParams = params
        );
        this.route.queryParams.subscribe(
            (params: Params) => this.queryParams = params
        );
        this.route.data.subscribe((
            data: Data) => this.data = data
        );

    }

    prettyPrint(obj: any): string {
        return JSON.stringify(obj, undefined, 2);
    }
}
