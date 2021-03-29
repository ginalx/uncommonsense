import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from '../services/utility.service';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() style = '';
    @Input() class = '';
    @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();
    @ViewChild('container', { read: ElementRef, static: false })
    container!: ElementRef;

    isOpen = new BehaviorSubject<boolean>(false);

    constructor(private utilityService: UtilityService) { }

    ngOnInit(): void {
        this.utilityService.clickEvent.subscribe(event => this.handleDocumentClick(event));
    }

    buttonClick(event: MouseEvent): void {
        if (!this.isOpen.getValue()) {
            this.isOpen.next(true);
        }
        this.clicked.emit(event);
    }

    private handleDocumentClick(event: MouseEvent): void {
        if (!this.container.nativeElement.contains(event.target)) {
            this.isOpen.next(false);
        }
    }
}
