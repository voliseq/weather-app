import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastNavComponent } from './forecast-nav.component';

describe('ForecastNavComponent', () => {
  let component: ForecastNavComponent;
  let fixture: ComponentFixture<ForecastNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
