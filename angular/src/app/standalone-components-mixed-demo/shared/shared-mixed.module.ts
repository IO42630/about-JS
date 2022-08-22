import { NgModule } from '@angular/core';

import { HighlightMixedDirective } from './highlight-mixed.directive';

@NgModule({
  declarations: [HighlightMixedDirective],
  exports: [HighlightMixedDirective],
})
export class SharedMixedModule {}
