import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherModel } from '../models/weather.model';
import { Observable } from 'rxjs';
import { ChartDataModel } from '../models/chart-data.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  forecasts: WeatherModel[][];
  chartData: Array<ChartDataModel>;
  activeDay: number = 0;
  currentCity: string = 'Kraków';
  avgPressure: number;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getForecast(this.currentCity).subscribe(forecasts => {
      this.forecasts = this.groupByDay(forecasts, 'date');
      this.chartData = this.createChartData(forecasts);
      this.avgPressure = this.calcAveragePressure(forecasts);
    });
  }

  onNavigate(currentDay: number): void {
    this.activeDay = currentDay;
  }

  onForecast(newCity: string): void {
    this.weatherService.getForecast(newCity).subscribe(
      forecasts => {
        console.log(this.forecasts);
        this.forecasts = this.groupByDay(forecasts, 'date');
        this.activeDay = 0;
        this.currentCity = newCity;
        this.chartData = this.createChartData(forecasts);
        this.avgPressure = this.calcAveragePressure(forecasts);
      },
      error => {
        alert('Something went wrong, probably invalid city name');
      }
    );
  }

  private groupByDay(collection, property): WeatherModel[][] {
    var i = 0,
      val,
      index,
      values = [],
      result = [];
    for (; i < collection.length; i++) {
      val = collection[i][property].split(' ')[0];
      index = values.indexOf(val);
      if (index > -1) result[index].push(collection[i]);
      else {
        values.push(val);
        result.push([collection[i]]);
      }
    }
    return result;
  }

  private calcAveragePressure(forecasts: WeatherModel[]): number {
    const pressureValues = forecasts.map(forecast => forecast.pressure);
    let averagePressure =
      pressureValues.reduce((sum, current) => sum + current, 0) /
      pressureValues.length;

    averagePressure = Math.round(averagePressure);
    return averagePressure;
  }

  private createChartData(forecasts: WeatherModel[]): Array<ChartDataModel> {
    const temperatureValues = forecasts.map(forecast => forecast.temperature);
    const chartData = [
      { data: temperatureValues, label: 'temperature', fill: false }
    ];
    return chartData;
  }
}
