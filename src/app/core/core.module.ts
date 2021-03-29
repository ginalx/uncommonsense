import { ButtonPopUpDirective } from './button/button-pop-up.directive';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFillDrip, faCircle, faChessBoard, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './button/button.component';
import { ButtonContentDirective } from './button/button-content.directive';
import { ButtonOptionDirective } from './button/button-option.directive';
import { CommonModule } from '@angular/common';

const declarations = [
    HeaderComponent,
    ButtonComponent,
    ButtonContentDirective,
    ButtonPopUpDirective,
    ButtonOptionDirective
];

@NgModule({
  declarations: [ ...declarations ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ ...declarations, FontAwesomeModule ]
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFillDrip, faCircle, faChessBoard, faTimes);
  }
}
