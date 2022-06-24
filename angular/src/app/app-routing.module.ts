import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './heroes/components/dashboard.component';
import { HeroesComponent } from './heroes/components/heroes.component';
import { HeroDetailComponent } from './heroes/components/hero-detail.component';
import { ParentComponent } from './event-demo/parent.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { TlParentComponent } from './template-lifecycle-demo/tl-parent.component';
import { SParentComponent } from './services-demo/s-parent.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { RouteBackComponent } from './router-demo/route-back.component';
import { AuthGuardService } from './auth-demo/auth-guard.service';
import { ExitGuardService } from './auth-demo/exit-guard.service';
import { ServerResolverService } from './router-demo/server-resolver.service';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsDemoReactiveComponent } from './forms-demo/forms-demo-reactive.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'event-demo', component: ParentComponent},
    {path: 'selector-demo', component: SelectorDemoComponent},
    {path: 'databinding-demo', component: DatabindingDemoComponent},
    {path: 'directives-demo', component: DirectivesDemoComponent},
    {path: 'template-lifecycle-demo', component: TlParentComponent},
    {path: 'services-demo', component: SParentComponent},
    {path: 'bootstrap-demo', component: BootstrapDemoComponent},
    {path: 'rxjs-demo', component: RxjsDemoComponent},
    {path: 'forms-demo', component: FormsDemoComponent},
    {path: 'forms-demo-reactive', component: FormsDemoReactiveComponent},
    {path: 'pipes-demo', component: PipesDemoComponent},
    /* ROUTER DEMO START */
    {
        path: 'router-demo',
        canActivate: [AuthGuardService],
        canDeactivate: [ExitGuardService], /* also applies to nested routes. */
        component: RouterDemoComponent,
        resolve: {server12: ServerResolverService}, /* alternative to onInit */
        children: [ /* nested router config. */
            {path: ':id1/:id2', component: RouteBackComponent}, /* KEY-R1 */
            {path: ':id1', component: RouteBackComponent, data: {world: 'placeholder'}},
        ]
    },
    /* '/' allowed as separator between params :id */
    {path: 'route-back-demo/:id1/:id2', component: RouteBackComponent}, /* KEY-R2 */
    {path: 'route-back-demo/:id1', component: RouteBackComponent, data: {data2: 'placeholder'}},
    /* ROUTER DEMO END */
    {path: '**', redirectTo: ''}, /* redirect all routes to '' */
    /* since Routes is checked entry be entry,
    * this results in "redirect all not defined routes to ''". */
    {path: '', redirectTo: '/somewhere-else', pathMatch: 'full'}
    /* '' matches all, since every path starts with ''.
    To disable "prefix matching" indicate 'full'. */
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        // {useHash: true}
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
