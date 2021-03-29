import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilityService {
    clickEvent = new Subject<MouseEvent>();

    constructor(@Inject(DOCUMENT) private document: Document) {
        document.addEventListener('click', (event) => this.clickEvent.next(event));
    }
}
