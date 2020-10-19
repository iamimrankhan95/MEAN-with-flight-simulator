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
    private toastr: ToastrService,
    private flightSimulatorService: FlightSimulatorService
  ) {
    this.handleError = httpErrorHandler.createHandleError('FlightSimulatorHttpService');
  }

  getFlightSimulatorResponseObjects(flightSimulatorRequest: FlightSimulatorRequest): Observable<FlightSimulatorResponseObject[]> {
    let params = new HttpParams()
      .set('DepartureAirportCode', (flightSimulatorRequest.DepartureAirportCode))
      .set('ArrivalAirportCode', flightSimulatorRequest.ArrivalAirportCode)
      .set('DepartureDate', (flightSimulatorRequest.DepartureDate))
      .set('ReturnDate', flightSimulatorRequest.ReturnDate);

    return this.http.get<ServerResponse>('http://localhost:3000' + applicationUrl.flight.readList)
      .pipe(
        tap((res: ServerResponse) => {
          if (res.status) {
            this.toastr.success('Flight List loaded successfully!', 'Success');
          }
          console.log(res.data);
        }),
        map((serverResponse: ServerResponse) => {
          return serverResponse.data;
        }),
        catchError(this.handleError('getFlightSimulatorResponseObjects', []))
      );
  }

  createFlight(flightFormValue: any) {
    return this.http.post<FlightSimulatorResponseObject[]>('http://localhost:3000' + applicationUrl.flight.create,
      this.flightSimulatorService.flightConvertToDto(flightFormValue))
      .pipe(
        catchError(this.handleError('createFlight', []))
      );
  }
}
