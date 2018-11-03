import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastChartComponent } from './forecast-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChartDataModel } from 'src/app/models/chart-data.model';

describe('ForecastChartComponent', () => {
  let component: ForecastChartComponent;
  let fixture: ComponentFixture<ForecastChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChartsModule],
      declarations: [ForecastChartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastChartComponent);
    component = fixture.componentInstance;
    component.chartData = [{ data: [1, 2, 3], label: "elo", fill: true }] as ChartDataModel[];
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
