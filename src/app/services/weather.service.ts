import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'df0b09fa2956d70ddfa0d3ec1b1f4b42';
  city = 'Sleman';

  constructor(private http: HttpClient) { }

  // getData(){
  //   return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);
  // }

  getData(){
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`)
  }

  getForecast(){
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}`)
  }
}
