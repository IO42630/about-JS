import { NgModule } from '@angular/core';

import { HighlightFullDirective } from './highlight-full.directive';

@NgModule({
  declarations: [HighlightFullDirective],
  exports: [HighlightFullDirective],
})
export class SharedFullModule {}
