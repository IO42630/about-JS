import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)], /* merge with .forRoot() */
    exports: [RouterModule]
})
export class HeroesRoutingModule {}
