import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss']
})
export class ForecastListComponent {
  @Input()
  activeDay: number;
  @Input()
  forecasts: WeatherModel[][];
  constructor() {}
}
