import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { ForecastChartComponent } from './forecast-chart/forecast-chart.component';
import { ForecastListComponent } from './forecast-list/forecast-list.component';
import { ForecastNavComponent } from './forecast-nav/forecast-nav.component';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, ChartsModule, HttpClientTestingModule],
      declarations: [WeatherComponent, ForecastChartComponent, ForecastListComponent, ForecastNavComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set input", () => {
    component.currentCity = "elo";
    fixture.detectChanges();
    expect(component.currentCity).toEqual("elo");
  })

});
