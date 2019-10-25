import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {
  private errorHintText = 'Please, try to type a city name again';
  @Input() weatherInfo: {};
  @Input() error: string;
  constructor() { }

  ngOnInit() {
  }
}
