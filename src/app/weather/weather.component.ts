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

  forecasts$: Observable<WeatherModel[][]>;
  activeDay: number = 1;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
     this.forecasts$ = this.weatherService.getForecast();
  }

  previousDay(): void{
    console.log(this.forecasts$);
    this.activeDay = this.activeDay ? this.activeDay - 1 : this.activeDay;
  }

  nextDay(): void {
    this.activeDay += 1;
  }

}
