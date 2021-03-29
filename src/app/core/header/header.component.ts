import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    isPaletteToggled = new BehaviorSubject<boolean>(false);

    palleteToggle(): void {
        this.isPaletteToggled.next(!this.isPaletteToggled.getValue());
    }

    changeColor(color: string): void {
        document.documentElement.style.setProperty('--primary-color', color);
    }
}
