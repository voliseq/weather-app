import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherModel } from '../models/weather.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  forecasts: WeatherModel[][];
  activeDay: number = 0;
  currentCity: string = "Kraków";
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getForecast(this.currentCity).subscribe(forecasts => {
      this.forecasts = this.groupByDay(forecasts, 'date');
    });
  }

  onNavigate(currentDay: number): void {
    this.activeDay = currentDay;
  }

  onForecast(newCity: string): void {
    this.weatherService.getForecast(newCity).subscribe(
      forecasts => {
        this.forecasts = this.groupByDay(forecasts, 'date');
        this.activeDay = 0;
        this.currentCity = newCity;
      },
      error => {
        alert('Something went wrong, probably invalid city name');
      })
  }

  groupByDay(collection, property): WeatherModel[][] {
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
