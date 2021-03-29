import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { UtilityService } from 'src/app/core/services/utility.service';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  @Input() source: Array<{ id: number, name: string }> = [];
  @Input() placeholder = 'Select';

  data: Array<{ id: number, name: string }> = [];
  isOpen = new BehaviorSubject<boolean>(false);
  selected: Array<{ id: number, name: string }> = [];

  @ViewChild('container', { read: ElementRef, static: false }) container!: ElementRef;

  constructor(private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.data = this.source.slice().sort(this.sort);
    this.utilityService.clickEvent.subscribe(event => this.handleDocumentClick(event));
  }

  click(): void {
    if (!this.isOpen.getValue()) {
      this.isOpen.next(true);
    }
  }

  select(i: number): void {
    this.selected.push(this.data[i]);
    this.utilityService.clickEvent.pipe(take(1)).subscribe(() => this.data.splice(i, 1));
  }

  remove(i: number): void {
    const target = this.source.find(item => item.id === this.selected[i].id);
    if (target) {
      this.data.push(target);
      this.data.sort(this.sort);
    }
    this.utilityService.clickEvent.pipe(take(1)).subscribe(() => this.selected.splice(i, 1));
  }

  getValue(): { id: number, name: string }[] {
    return this.selected;
  }

  private handleDocumentClick(event: MouseEvent): void {
    if (!this.container.nativeElement.contains(event.target)) {
      this.isOpen.next(false);
    }
  }

  private sort = (a: { id: number, name: string }, b: { id: number, name: string }) => a.name < b.name ? -1 : 1;
}
