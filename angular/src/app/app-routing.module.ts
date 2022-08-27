import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ParentComponent } from './event-demo/parent.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { SParentComponent } from './services-demo/s-parent.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { RouteBackComponent } from './router-demo/route-back.component';
import { AuthGuardService } from './auth-demo/auth-guard.service';
import { ExitGuardService } from './auth-demo/exit-guard.service';
import { ServerResolverService } from './router-demo/server-resolver.service';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsDemoReactiveComponent } from './forms-demo/forms-demo-reactive.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { DynamicComponentDemoComponent } from './dynamic-component-demo/dynamic-component-demo.component';
import { WelcomeFullComponent } from './standalone-components-full-demo/welcome/welcome.component';
import { WelcomeMixedComponent } from './standalone-components-mixed-demo/welcome/welcome-mixed.component';
import { TemplateParentComponent } from './template-demo/template-parent.component';

const routes: Routes = [
    { path: '', redirectTo: '/event-demo', pathMatch: 'full' },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule) },
    /* TODO this should be lazy-loading -> check if it actually works */
    { path: 'event-demo', component: ParentComponent },
    { path: 'selector-demo', component: SelectorDemoComponent },
    { path: 'data-binding-demo', component: DataBindingDemoComponent },
    { path: 'directives-demo', component: DirectivesDemoComponent },
    { path: 'template-demo', component: TemplateParentComponent },
    { path: 'services-demo', component: SParentComponent },
    { path: 'bootstrap-demo', loadChildren: () => import('./bootstrap-demo/bootstrap-demo.module').then(m => m.BootstrapDemoModule) },
    { path: 'rxjs-demo', component: RxjsDemoComponent },
    { path: 'forms-demo', component: FormsDemoComponent },
    { path: 'forms-demo-reactive', component: FormsDemoReactiveComponent },
    { path: 'pipes-demo', component: PipesDemoComponent },
    { path: 'http-client-demo', component: HttpClientDemoComponent },
    { path: 'dynamic-component-demo', component: DynamicComponentDemoComponent },
    { path: 'standalone-components-full-demo', component: WelcomeFullComponent },
    { path: 'standalone-components-mixed-demo', component: WelcomeMixedComponent },
    /* ROUTER DEMO START */
    {
        path: 'router-demo',
        canActivate: [AuthGuardService],
        canDeactivate: [ExitGuardService], /* also applies to nested routes. */
        component: RouterDemoComponent,
        resolve: { server12: ServerResolverService }, /* alternative to onInit */
        children: [ /* nested router config. */
            { path: ':id1/:id2', component: RouteBackComponent }, /* KEY-R1 */
            { path: ':id1', component: RouteBackComponent, data: { world: 'placeholder' } },
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
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } /* use lazy load, but preload all modules */
        // {useHash: true}
    )],
    exports: [RouterModule] // must export, for it to be available in consumer of AppRoutingModule
})
export class AppRoutingModule {}
