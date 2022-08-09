import { NgModule } from '@angular/core';
import { HeroesComponent } from './components/heroes.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { MessagesComponent } from './components/messages.component';
import { HeroSearchComponent } from './components/hero-search.component';
import { DashboardComponent } from './components/dashboard.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared.module';
import { HeroRepoService } from './service/hero-repo.service';
import { MessageService } from './service/message.service';

@NgModule({
    imports: [
        SharedModule, /* replaces BrowserModule, since that one can only be used once. */
        HeroesRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
    ],
    exports: [],
    providers: [
        HeroRepoService,
        MessageService
    ]
})
export class HeroesModule {}
