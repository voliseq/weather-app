import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';

fdescribe('WeatherService', () => {

  let service: WeatherService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [WeatherService]
    });

    injector = getTestBed();
    service = injector.get(WeatherService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('should return weather data', () => {
    service.getForecast("krakow").subscribe(forecast => {

    })
  });
});
