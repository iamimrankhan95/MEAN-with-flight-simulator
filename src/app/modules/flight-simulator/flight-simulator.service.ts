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

  ConvertToFlightDto(flight: any): IFlightDto {
    return {
      '_Id': null,
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
    };
  }

  ConvertToFlightModel(flight: IFlightDto): IFlight {
    const depart = new Date(flight.DepartureDate);
    const departObj = {year: depart.getFullYear(), month: depart.getDate(), day: depart.getMonth() + 1};
    const returnDate = new Date(flight.ReturnDate);
    const returnDateObj = {year: returnDate.getFullYear(), month: returnDate.getDate(), day: returnDate.getMonth() + 1};
    return {
      'Id': flight._Id,
      'AirlineLogoAddress': flight.AirlineLogoAddress,
      'AirlineName': flight.AirlineName,
      'InboundFlightsDuration': flight.InboundFlightsDuration,
      'ItineraryId': flight.ItineraryId,
      'OutboundFlightsDuration': flight.OutboundFlightsDuration,
      'Stops': flight.Stops,
      'TotalAmount': flight.TotalAmount,
      'DepartureAirportCode': flight.DepartureAirportCode,
      'ArrivalAirportCode': flight.ArrivalAirportCode,
      'DepartureDate': departObj,
      'ReturnDate': returnDateObj,
    };
  }
}
