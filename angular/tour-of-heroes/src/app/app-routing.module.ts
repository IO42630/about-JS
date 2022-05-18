import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { ParentComponent } from './event-demo/parent.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { TlParentComponent } from './template-lifecycle-demo/tl-parent.component';
import { SParentComponent } from './services-demo/s-parent.component';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { RouteBackComponent } from './router-demo/route-back.component';

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
    {
        path: 'router-demo', component: RouterDemoComponent, children: [
            /* */
            {path: ':id1/:id2', component: RouteBackComponent}, /* KEY-R1 */
            {path: ':id1/:id2', component: RouteBackComponent},
        ]
    },
    /* '/' allowed as separator between params :id */
    {path: 'route-back-demo/:id1/:id2', component: RouteBackComponent}, /* KEY-R2 */
    {path: '**', redirectTo: ''}, /* redirect all routes to '' */
    /* since Routes is checked entry be entry,
    * this results in "redirect all not defined routes to ''". */
    {path: '', redirectTo: '/somewhere-else', pathMatch: 'full'}
    /* '' matches all, since every path starts with ''.
    To disable "prefix matching" indicate 'full'. */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
