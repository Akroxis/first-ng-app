import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss'],
})
export class InputDefaultComponent implements OnInit {
  inputValue: string;
  @Input() error: boolean;
  @Output() cityChosen = new EventEmitter<string>();
  @ViewChild('search', { static: true }) searchElement: ElementRef;
  constructor() { }

  ngOnInit() {
    this.setFocusOnInput();
  }

  setCity(city): void {
    this.cityChosen.emit(city);
  }
  setFocusOnInput(): void {
    this.searchElement.nativeElement.focus();
  }
}
