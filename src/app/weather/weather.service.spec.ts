import { TestBed, inject, getTestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { WeatherModule } from './weather.module';

fdescribe('WeatherService', () => {

  let service: WeatherService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WeatherService,
      ]
    });

    injector = getTestBed();
    service = injector.get(WeatherService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  })); 

  it('expects service to fetch data with proper sorting',
  inject([HttpTestingController, WeatherService],
    (httpMock: HttpTestingController, service: WeatherService) => {
      const city = "krakow";
      service.getForecast("krakow").subscribe(data => {
        expect(data.length).toBe(1);
      });
      const req = httpMock.expectOne(`${service.apiUrl}?q=${city}&units=metric&mode=json&APPID=${service.apiKey}`);
      expect(req.request.method).toEqual('GET');
      req.flush([{}]);
    })
);
});
