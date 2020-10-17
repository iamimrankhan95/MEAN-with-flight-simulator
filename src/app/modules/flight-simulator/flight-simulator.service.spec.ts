import { TestBed } from '@angular/core/testing';

import { FlightSimulatorService } from './flight-simulator.service';

describe('FlightSimulatorService', () => {
  let service: FlightSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
