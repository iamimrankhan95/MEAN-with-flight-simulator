import { ServerResponse } from './../../shared/models/dto/serverResponse';
import { IFlight } from './../../shared/models/flight.model';
import { IFlightDto } from './../../shared/models/dto/flight.dto';
import { Injectable } from '@angular/core';
import { FlightSimulatorResponseObject } from '../../shared/models/dto/flight-simulator-response.dto';
import { FlightSimulatorRequest } from '../../shared/models/dto/flight-simulator-request.dto';
import { Observable, Subject } from 'rxjs';
import { FlightSimulatorHttpService } from './flight-simulator-http.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlightSimulatorService {

  public Initflights = [  {
    'AirlineLogoAddress': 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif',
    'AirlineName': 'China Southern Airlines',
    'InboundFlightsDuration': '24:10',
    'ItineraryId': '',
    'OutboundFlightsDuration': '26:20',
    'Stops': 2,
    'TotalAmount': 2903.84,
    'DepartureAirportCode': 'DHK',
    'ArrivalAirportCode': 'CHT',
    'DepartureDate': '2012-12-24T00:00:00+11:00',
    'ReturnDate': '2013-01-03T00:00:00+11:00'
  },
  {
    'AirlineLogoAddress': 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
    'AirlineName': 'Emirates Airline',
    'InboundFlightsDuration': '42:55',
    'ItineraryId': '',
    'OutboundFlightsDuration': '25:40',
    'Stops': 2,
    'TotalAmount': 2954.14,
    'DepartureAirportCode': 'DHK',
    'ArrivalAirportCode': 'CHT',
    'DepartureDate': '2012-12-24T00:00:00+11:00',
    'ReturnDate': '2013-01-03T00:00:00+11:00'
  },
  {
    'AirlineLogoAddress': 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
    'AirlineName': 'Emirates Airline',
    'InboundFlightsDuration': '42:55',
    'ItineraryId': '',
    'OutboundFlightsDuration': '27:40',
    'Stops': 2,
    'TotalAmount': 2954.14,
    'DepartureAirportCode': 'DHK',
    'ArrivalAirportCode': 'CHT',
    'DepartureDate': '2012-12-24T00:00:00+11:00',
    'ReturnDate': '2013-01-03T00:00:00+11:00'
  },
  {
    'AirlineLogoAddress': 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/MultiAirline.gif',
    'AirlineName': 'Multi',
    'InboundFlightsDuration': '34:00',
    'ItineraryId': '',
    'OutboundFlightsDuration': '26:20',
    'Stops': 2,
    'TotalAmount': 2979.06,
    'DepartureAirportCode': 'DHK',
    'ArrivalAirportCode': 'CHT',
    'DepartureDate': '2012-12-24T00:00:00+11:00',
    'ReturnDate': '2013-01-03T00:00:00+11:00'
  },
  {
    'AirlineLogoAddress': 'http://nmflightapi.azurewebsites.net/Images/AirlineLogo/EK.gif',
    'AirlineName': 'Emirates Airline',
    'InboundFlightsDuration': '23:25',
    'ItineraryId': '',
    'OutboundFlightsDuration': '25:40',
    'Stops': 2,
    'TotalAmount': 3006.14,
    'DepartureAirportCode': 'DHK',
    'ArrivalAirportCode': 'CHT',
    'DepartureDate': '2012-12-24T00:00:00+11:00',
    'ReturnDate': '2013-01-03T00:00:00+11:00'
  }];
  private _flightUpdated = new Subject<IFlight[]>();
  private _flights: IFlight[] = [];
  constructor(private flightSimulatorHttpService: FlightSimulatorHttpService, private toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService, private route: ActivatedRoute,
    private router: Router) { }

  set flights(flights: IFlight[]) {
    this._flights = flights;
  }

  get flights(): IFlight[] {
    return this._flights;
  }

  getFlightUpdateListener() {
    return this._flightUpdated.asObservable();
  }

  getFlights(flightSimulatorRequest: FlightSimulatorRequest) {
    this.ngxLoader.start();
    this.flightSimulatorHttpService.getFlights(flightSimulatorRequest)
      .pipe(finalize(() => this.ngxLoader.stop()),
        map((res: ServerResponse) => {
          return res.data.length > 0 ? res.data.map(flightDto => this.ConvertToFlightModel(flightDto)) : res.data;
        }))
      .subscribe((flights: IFlight[]) => {
        this._flights = this.Initflights;
        this._flightUpdated.next([...this._flights]);
      });
  }

  createFlight(flightFormValue: any) {
    this.flightSimulatorHttpService.createFlight(this.ConvertToFlightDto(flightFormValue))
      .subscribe(
        (res) => {
          this.toastr.success(res.message, 'Success');
          this.router.navigate(['../list'], { relativeTo: this.route });
        }
      );
  }

  deleteFlight(id: any, flightSimulatorRequest: FlightSimulatorRequest) {
    this.flightSimulatorHttpService.deleteFlight(id).subscribe(
      res => this.getFlights(flightSimulatorRequest)
    );
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
      '_id': null,
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
    const departObj = { year: depart.getFullYear(), month: depart.getDate(), day: depart.getMonth() + 1 };
    const returnDate = new Date(flight.ReturnDate);
    const returnDateObj = { year: returnDate.getFullYear(), month: returnDate.getDate(), day: returnDate.getMonth() + 1 };
    return {
      // 'Id': flight._id,
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
