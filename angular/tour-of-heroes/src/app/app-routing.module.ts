import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { ParentComponent } from './components/event-demo/parent.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'event-demo', component: ParentComponent},
    {path: 'selector-demo', component: SelectorDemoComponent},
    {path: 'databinding-demo', component: DatabindingDemoComponent},
    {path: 'directives-demo', component: DirectivesDemoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
