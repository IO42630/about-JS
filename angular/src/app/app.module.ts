import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './heroes/service/in-memory-data.service';
import { AppComponent } from './app.component';
import { ParentComponent } from './event-demo/parent.component';
import { ChildComponent } from './event-demo/child.component';
import { GrandchildComponent } from './event-demo/grandchild.component';
import { SelectorDemoComponent } from './selector-demo/selector-demo.component';
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
import { DisplayComponent } from './data-binding-demo/display.component';
import { RouteBackComponent } from './router-demo/route-back.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { RouterModule } from '@angular/router';
import { AuthModalComponent } from './auth-demo/auth-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementSelectorComponent } from './selector-demo/element-selector.component';
import { VanillaSelectorComponent } from './selector-demo/vanilla-selector.component';
import { ClassSelectorComponent } from './selector-demo/class-selector.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { FormsDemoReactiveComponent } from './forms-demo/forms-demo-reactive.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ShortenPipe } from './pipes-demo/shorten.pipe';
import { FilterPipe } from './pipes-demo/filter.pipe';
import { FilterDirtyPipe } from './pipes-demo/filter-dirty.pipe';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { AuthInterceptorService } from './http-client-demo/auth.interceptor.service';
import { CustomEventComponent } from './event-demo/custom.event.component';
import { DynamicComponentDemoComponent } from './dynamic-component-demo/dynamic-component-demo.component';
import { AlertComponent } from './dynamic-component-demo/alert.component';
import { PlaceholderDirective } from './dynamic-component-demo/placeholder.directive';
import { ModulesDemoComponent } from './modules-demo/modules-demo.component';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app-routing.module';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { BootstrapDemoModule } from './bootstrap-demo/bootstrap-demo.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        RouterModule,
        AppRoutingModule,
        NgbModule,
        HeroesModule,
        BootstrapDemoModule
    ],
    declarations: [
        AppComponent,
        DataBindingDemoComponent,
        ParentComponent,
        ChildComponent,
        GrandchildComponent,
        SelectorDemoComponent,
        ClassSelectorComponent,
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
        FormsDemoComponent,
        FormsDemoReactiveComponent,
        PipesDemoComponent,
        ShortenPipe,
        FilterPipe,
        FilterDirtyPipe,
        HttpClientDemoComponent,
        CustomEventComponent,
        DynamicComponentDemoComponent,
        AlertComponent,
        PlaceholderDirective,
        ModulesDemoComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
