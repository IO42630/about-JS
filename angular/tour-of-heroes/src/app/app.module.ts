import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // NgModel is imported from here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { DashboardComponent } from './components/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent } from './components/heroes.component';
import { HeroSearchComponent } from './components/hero-search.component';
import { MessagesComponent } from './components/messages.component';
import { ParentComponent } from './event-demo/parent.component';
import { ChildComponent } from './event-demo/child.component';
import { GrandchildComponent } from './event-demo/grandchild.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { SelectorClassComponent } from './selector-demo/selector-class.component';
import { SelectorElementComponent } from './selector-demo/selector-element.component';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { CoreComponent } from './core/core.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { TlParentComponent } from './template-lifecycle-demo/tl-parent.component';
import { EmptyComponent } from './core/empty.component';
import { TlChildComponent } from './template-lifecycle-demo/tl-child.component';
import { MyHighlightDirective } from './directives-demo/my-highlight.directive';
import { MyBetterHighDirective } from './directives-demo/my-better-high.directive';
import { UnlessDirective } from './directives-demo/unless.directive';
import { SParentComponent } from './services-demo/s-parent.component';
import { SChildComponent } from './services-demo/s-child.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        HeroSearchComponent,
        ParentComponent,
        ChildComponent,
        GrandchildComponent,
        SelectorDemoComponent,
        SelectorClassComponent,
        SelectorElementComponent,
        DatabindingDemoComponent,
        CoreComponent,
        DirectivesDemoComponent,
        TlParentComponent,
        EmptyComponent,
        TlChildComponent,
        MyHighlightDirective,
        MyBetterHighDirective,
        UnlessDirective,
        SParentComponent,
        SChildComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
