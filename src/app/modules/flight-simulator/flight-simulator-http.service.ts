import { IFlightDto } from './../../shared/models/dto/flight.dto';
import { ServerResponse } from './../../shared/models/dto/serverResponse';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { applicationUrl } from '../../shared/enums/application-urls';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../shared/services/http-error-handler.service';
import { ToastrService } from 'ngx-toastr';
import { FlightSimulatorResponseObject } from '../../shared/models/dto/flight-simulator-response.dto';
import { FlightSimulatorService } from './flight-simulator.service';
import { FlightSimulatorRequest } from '../../shared/models/dto/flight-simulator-request.dto';
import { data } from 'jquery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FlightSimulatorHttpService {

  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
  ) {
    this.handleError = httpErrorHandler.createHandleError('FlightSimulatorHttpService');
  }

  getFlights(flightSimulatorRequest: FlightSimulatorRequest): Observable<ServerResponse> {
    let params = new HttpParams()
      .set('DepartureAirportCode', (flightSimulatorRequest.DepartureAirportCode))
      .set('ArrivalAirportCode', flightSimulatorRequest.ArrivalAirportCode)
      .set('DepartureDate', (flightSimulatorRequest.DepartureDate))
      .set('ReturnDate', flightSimulatorRequest.ReturnDate);

    return this.http.get<ServerResponse>('http://localhost:3000' + applicationUrl.flight.readList)
      .pipe(catchError(this.handleError('getFlightSimulatorResponseObjects', new ServerResponse([]))));
  }

  createFlight(flightFormValue: any): Observable<ServerResponse> {
    return this.http.post<ServerResponse>('http://localhost:3000' + applicationUrl.flight.create, flightFormValue)
      .pipe(map((serverResponse: ServerResponse) => {
        return serverResponse.data;
      }),
        catchError(this.handleError('createFlight', new ServerResponse(null)))
      );
  }

  deleteFlight(id: any) {
    return this.http.delete<ServerResponse>('http://localhost:3000' + applicationUrl.flight.create + '/' + id)
      .pipe(
        catchError(this.handleError('deleteFlight', {}))
      );
  }
}
