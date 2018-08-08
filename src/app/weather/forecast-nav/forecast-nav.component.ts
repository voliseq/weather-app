import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forecast-nav',
  templateUrl: './forecast-nav.component.html',
  styleUrls: ['./forecast-nav.component.scss']
})
export class ForecastNavComponent {

  @Input() daysCount: number;
  @Input() todayForecasts: WeatherModel[];
  @Input() activeDay: number;
  @Input() currentCity: string;
  @Output() navigate: EventEmitter<number> = new EventEmitter();
  @Output() forecast: EventEmitter<string> = new EventEmitter();
  city = new FormControl('krakow', Validators.required);

  constructor() { }

  ngOnInit(){
    this.city.valueChanges.subscribe(newCity => {
      console.log(newCity);
    })
  }

  emitPreviousDay(): void {
    this.activeDay = this.activeDay ? this.activeDay - 1 : this.activeDay;
    this.navigate.emit(this.activeDay);
  }

  emitNextDay(): void {
    this.activeDay = this.activeDay >= (this.daysCount - 1) ? this.activeDay : this.activeDay + 1;
    this.navigate.emit(this.activeDay);
  }

  emitForecast(): void{
    const newCity = this.city.value;
    this.forecast.emit(newCity);
  }

}
