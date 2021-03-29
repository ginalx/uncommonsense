import { NgModule } from '@angular/core';
import { LegendOfZeldaBOTWRouting } from './legend-of-zelda-botw.routing';
import { LOZBOTWCookComponent } from './cook/cook.component';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from '../shared/multi-select/multi-select.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
      LOZBOTWCookComponent,
      MultiSelectComponent,
  ],
  imports: [
    CommonModule,
    LegendOfZeldaBOTWRouting,
    CoreModule
  ],
  providers: [],
})
export class LegendOfZeldaBOTWModule { }
