import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WeatherModel } from '../models/weather.model';

const CELCIUS_KELVIN_DIFFERENCE = 273.15;
const iconUrl = "http://openweathermap.org/img/w/"

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
  constructor(private http: HttpClient) { }

  getForecast(city?: string): Observable<WeatherModel[][]> {
    const requestUrl = `${this.apiUrl}?q=krakow&mode=json&APPID=cbc9a8df44052c37609415d452b3ff61`;
    return this.http.get(requestUrl).pipe(
      tap(data => console.log(data)),
      map(data => data['list'].map(listItem => ({
        date: listItem['dt_txt'],
        temperature: Math.round(listItem.main.temp - CELCIUS_KELVIN_DIFFERENCE),
        pressure: listItem.main.pressure,
        iconUrl: `${iconUrl}${listItem.weather[0].icon}.png`
      }))),
      map(data => this.groupByDay(data, 'date')),
    );
  }

  groupByDay(collection, property) {
    var i = 0, val, index,
      values = [], result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property].split(' ')[0];
      index = values.indexOf(val);
      if (index > -1)
        result[index].push(collection[i]);
      else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  };
}
