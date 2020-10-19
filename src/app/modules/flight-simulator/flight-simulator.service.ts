import { IFlight } from './../../shared/models/flight.model';
import { IFlightDto } from './../../shared/models/dto/flight.dto';
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

  flightConvertToDto(flight: any): IFlightDto {
    return {
      'Id': null,
      'AirlineLogoAddress': flight.AirlineLogoAddress,
      'AirlineName': flight.AirlineName,
      'InboundFlightsDuration': flight.InboundFlightsDuration,
      'ItineraryId': flight.ItineraryId,
      'OutboundFlightsDuration': flight.OutboundFlightsDuration,
      'Stops': flight.Stops,
      'TotalAmount': flight.TotalAmount,
      'DepartureAirportCode': flight.DepartureAirportCode,
      'ArrivalAirportCode': flight.ArrivalAirportCode,
      'DepartureDate': flight.DepartureDate.year + '/' + flight.DepartureDate.month + '/' + flight.DepartureDate.day,
      'ReturnDate': flight.ReturnDate.year + '/' + flight.ReturnDate.month + '/' + flight.ReturnDate.day,
    }
  }
}
