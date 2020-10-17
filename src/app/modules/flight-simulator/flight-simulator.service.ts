import { Injectable } from '@angular/core';
import { FlightSimulatorResponseObject } from '../../shared/models/dto/flight-simulator-response.dto';
import { FlightSimulatorRequest } from '../../shared/models/dto/flight-simulator-request.dto';

@Injectable({
  providedIn: 'root'
})
export class FlightSimulatorService {

  private _flights: FlightSimulatorResponseObject[] = [];
  constructor() { }

  set flights(flights: FlightSimulatorResponseObject[]) {
    this._flights = flights;
  }

  get flights(): FlightSimulatorResponseObject[] {
    return this._flights;
  }

  convertToRequestData(formData: any): FlightSimulatorRequest {
    return {
      'ArrivalAirportCode': formData.ArrivalAirportCode,
      'DepartureAirportCode': formData.DepartureAirportCode,
      'DepartureDate': formData.DepartureDate,
      'ReturnDate': formData.ReturnDate
    }
  }
}
