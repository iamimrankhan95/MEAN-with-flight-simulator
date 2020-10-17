import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from './shared/services/http-error-handler.service';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('AppHttpService')
  }
}
