import { Component, OnInit } from '@angular/core';
import requesterService from '../services/requester.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers: [requesterService]
})
export class MainPageComponent implements OnInit {
  currentCityWeatherInfo: object;
  errorInfo: string;
  constructor(private requester: requesterService) { }

  ngOnInit() {
  }

  onCitySet(city: string) {
    this.currentCityWeatherInfo = null;
    this.errorInfo = '';
    this.requester.getActualData(city).subscribe(
      data => {
        this.currentCityWeatherInfo = data;
      },
      error => this.errorInfo = error.statusText
    );
  }
}
