import { Injectable, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export default class RequesterService {
  private apiKey = '524901&appid=cefaf67b8a11caccf249c2a0c697d23f';
  constructor(private http: HttpClient) {
  }

  getActualData(cityName: string): Observable<object> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&id=${this.apiKey}&units=metric`);
  }
}
