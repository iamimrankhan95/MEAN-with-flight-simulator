import { TestBed } from '@angular/core/testing';

import { FlightSimulatorHttpService } from './flight-simulator-http.service';
import { FlightSimulatorRequest } from '../../shared/models/dto/flight-simulator-request.dto';
import { FlightSimulatorResponseObject } from '../../shared/models/dto/flight-simulator-response.dto';
import { FlightSimulatorService } from './flight-simulator.service';

describe('FlightSimulatorHttpService', () => {
  let service: FlightSimulatorHttpService;
  let serviceData: FlightSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightSimulatorHttpService, FlightSimulatorService]
    });
    service = TestBed.inject(FlightSimulatorHttpService);
    serviceData = TestBed.inject(FlightSimulatorService);
  });

  it('should be retrive all flights', () => {
    let flightSimulatorRequest: FlightSimulatorRequest = {
      DepartureAirportCode: '',
      ArrivalAirportCode: '',
      DepartureDate: '',
      ReturnDate: ''
    };
    flightSimulatorRequest.DepartureAirportCode = 'MEl';
    flightSimulatorRequest.ArrivalAirportCode = 'LHR';
    flightSimulatorRequest.DepartureDate = '2012-12-24T00:00:00+11:00';
    flightSimulatorRequest.ReturnDate = '2013-01-03T00:00:00+11:00';
    service.getFlightSimulatorResponseObjects(flightSimulatorRequest)
      .subscribe(
        (res: FlightSimulatorResponseObject[]) => {
          expect(res.length).toBeGreaterThan(0);
        }
      )
  });
});
