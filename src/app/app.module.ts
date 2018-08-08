import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastListComponent } from './weather/forecast-list/forecast-list.component';
import { ForecastNavComponent } from './weather/forecast-nav/forecast-nav.component';
import { ForecastChartComponent } from './weather/forecast-chart/forecast-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastListComponent,
    ForecastNavComponent,
    ForecastChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
