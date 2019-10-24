import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss'],
})
export class InputDefaultComponent implements OnInit {
  inputValue: string;
  @Output() cityChosen = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  setCity(city) {
    this.cityChosen.emit(city);
  }
}
