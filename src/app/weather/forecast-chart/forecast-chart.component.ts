import { Component, OnInit } from '@angular/core';
import { ChartDataModel } from '../../models/chart-data.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-forecast-chart',
  templateUrl: './forecast-chart.component.html',
  styleUrls: ['./forecast-chart.component.scss']
})
export class ForecastChartComponent implements OnInit {
  @Input()
  chartData: Array<ChartDataModel>;
  @Input()
  avgPressure: number;
  chartLabels: Array<string> = [];
  constructor() {}

  chartOptions = {
    responsive: true,
    backgroundColor: false
  };

  ngOnInit() {
    this.chartLabels = this.createChartLabels();
  }

  private createChartLabels() {
    return Array.from({ length: this.chartData[0].data.length }, (v, i) =>
      (i + 1).toString()
    );
  }
}
