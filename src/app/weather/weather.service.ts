import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
  private readonly iconUrl = "http://openweathermap.org/img/w/";
  private readonly apiKey = "cbc9a8df44052c37609415d452b3ff61";

  constructor(private http: HttpClient) { }

  getForecast(city: string): Observable<WeatherModel[]> {
    const requestUrl = `${this.apiUrl}?q=${city}&units=metric&mode=json&APPID=${this.apiKey}`;
    return this.http.get(requestUrl).pipe(
      map(data => data['list']
        .map(listItem => ({
          date: listItem['dt_txt'],
          temperature: Math.round(listItem.main.temp),
          pressure: listItem.main.pressure,
          iconUrl: `${this.iconUrl}${listItem.weather[0].icon}.png`
        })), ),
      take(1)
    )
  }
}
