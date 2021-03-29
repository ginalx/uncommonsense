import { Directive, HostBinding } from '@angular/core';

@Directive({ selector: '[appButtonOption]' })
export class ButtonOptionDirective {
    @HostBinding('style')
    style = `
        margin: 0;
        padding: 10px 5px;
    `;

    @HostBinding('class')
    class = 'app-button-option';
}
