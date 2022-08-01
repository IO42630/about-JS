import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // NgModel is imported from here
import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './heroes/service/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './heroes/components/dashboard.component';
import { HeroDetailComponent } from './heroes/components/hero-detail.component';
import { HeroesComponent } from './heroes/components/heroes.component';
import { HeroSearchComponent } from './heroes/components/hero-search.component';
import { MessagesComponent } from './heroes/components/messages.component';
import { ParentComponent } from './event-demo/parent.component';
import { ChildComponent } from './event-demo/child.component';
import { GrandchildComponent } from './event-demo/grandchild.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
import { DatabindingDemoComponent } from './databinding-demo/databinding-demo.component';
import { CoreComponent } from './util/core.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { TlParentComponent } from './template-lifecycle-demo/tl-parent.component';
import { EmptyComponent } from './util/empty.component';
import { TlChildComponent } from './template-lifecycle-demo/tl-child.component';
import { MyHighlightDirective } from './directives-demo/my-highlight.directive';
import { MyBetterHighDirective } from './directives-demo/my-better-high.directive';
import { UnlessDirective } from './directives-demo/unless.directive';
import { SParentComponent } from './services-demo/s-parent.component';
import { SChildComponent } from './services-demo/s-child.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterDemoComponent } from './router-demo/router-demo.component';
import { DisplayComponent } from './databinding-demo/display.component';
import { RouteBackComponent } from './router-demo/route-back.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { RouterModule } from '@angular/router';
import { AuthModalComponent } from './auth-demo/auth-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementSelectorComponent } from './selector-demo/element-selector.component';
import { VanillaSelectorComponent } from './selector-demo/vanilla-selector.component';
import { ClassSelectorComponent } from './selector-demo/class-selector.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';
import { FormsBootstrapComponent } from './bootstrap-demo/forms-bootstrap.component';
import { GridsBootstrapComponent } from './bootstrap-demo/grids-bootstrap.component';
import { MediaBootstrapComponent } from './bootstrap-demo/media-bootstrap.component';
import { MiscBootstrapComponent } from './bootstrap-demo/misc-bootstrap.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsDemoReactiveComponent } from './forms-demo/forms-demo-reactive.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ShortenPipe } from './pipes-demo/shorten.pipe';
import { FilterPipe } from './pipes-demo/filter.pipe';
import { FilterDirtyPipe } from './pipes-demo/filter-dirty.pipe';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        // HttpClientInMemoryWebApiModule.forRoot(
        //     InMemoryDataService, {dataEncapsulation: false}
        // ),
        MatSidenavModule,
        RouterModule,
        NgbModule
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
        ClassSelectorComponent,
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
        SChildComponent,
        RouterDemoComponent,
        DisplayComponent,
        RouteBackComponent,
        RxjsDemoComponent,
        AuthModalComponent,
        ElementSelectorComponent,
        VanillaSelectorComponent,
        BootstrapDemoComponent,
        FormsBootstrapComponent,
        GridsBootstrapComponent,
        MediaBootstrapComponent,
        MiscBootstrapComponent,
        FormsDemoComponent,
        FormsDemoReactiveComponent,
        PipesDemoComponent,
        ShortenPipe,
        FilterPipe,
        FilterDirtyPipe,
        HttpClientDemoComponent,
        CustomEventComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
