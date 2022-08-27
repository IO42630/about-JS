import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ParentComponent } from './event-demo/parent.component';
import { ChildComponent } from './event-demo/child.component';
import { GrandchildComponent } from './event-demo/grandchild.component';
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
import { SelectorDemoModule } from './selector-demo/selector-demo.module';
import { WelcomeFullComponent } from './standalone-components-full-demo/welcome/welcome.component';
import { WelcomeMixedComponent } from './standalone-components-mixed-demo/welcome/welcome-mixed.component';
import { DetailsMixedComponent } from './standalone-components-mixed-demo/welcome/details-mixed.component';

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
        BootstrapDemoModule,
        SelectorDemoModule,
        DetailsMixedComponent, /* standalone Components are imported instead of declared. */
        WelcomeFullComponent,
    ],
    declarations: [
        AppComponent,
        DataBindingDemoComponent,
        ParentComponent,
        ChildComponent,
        GrandchildComponent,
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
        ModulesDemoComponent,
        WelcomeMixedComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
