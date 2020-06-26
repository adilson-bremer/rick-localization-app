import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLogsComponent } from './travel-logs.component';

describe('TravelLogsComponent', () => {
  let component: TravelLogsComponent;
  let fixture: ComponentFixture<TravelLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
