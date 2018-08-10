import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastNavComponent } from './forecast-nav/forecast-nav.component';
import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ChartsModule],
  declarations: [
    WeatherComponent,
    ForecastListComponent,
    ForecastNavComponent,
    ForecastChartComponent
  ],
  exports: [
    WeatherComponent,
    ForecastListComponent,
    ForecastNavComponent,
    ForecastChartComponent
  ]
})
export class WeatherModule {}
