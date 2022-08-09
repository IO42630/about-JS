import { NgModule } from '@angular/core';
import { SelectorDemoComponent } from './selector-demo.component';
import { ClassSelectorComponent } from './class-selector.component';
import { ElementSelectorComponent } from './element-selector.component';
import { VanillaSelectorComponent } from './vanilla-selector.component';

@NgModule({
    declarations: [
        SelectorDemoComponent,
        ClassSelectorComponent,
        ElementSelectorComponent,
        VanillaSelectorComponent,
    ],
    exports: [
        SelectorDemoComponent
    ]
})
export class SelectorDemoModule {}
