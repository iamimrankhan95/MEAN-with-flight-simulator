import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSimulatorComponent } from './flight-simulator.component';

describe('FlightSimulatorComponent', () => {
  let component: FlightSimulatorComponent;
  let fixture: ComponentFixture<FlightSimulatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSimulatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
