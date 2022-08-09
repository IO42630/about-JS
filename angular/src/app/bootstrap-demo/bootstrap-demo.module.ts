import { NgModule } from '@angular/core';
import { BootstrapDemoComponent } from './bootstrap-demo.component';
import { FormsBootstrapComponent } from './forms-bootstrap.component';
import { GridsBootstrapComponent } from './grids-bootstrap.component';
import { MediaBootstrapComponent } from './media-bootstrap.component';
import { MiscBootstrapComponent } from './misc-bootstrap.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';

const routes: Routes = [
    { path: '', component: BootstrapDemoComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        BootstrapDemoComponent,
        FormsBootstrapComponent,
        GridsBootstrapComponent,
        MediaBootstrapComponent,
        MiscBootstrapComponent,
    ],
    exports: [
        BootstrapDemoComponent
    ]
})
export class BootstrapDemoModule {}
