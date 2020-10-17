import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {
  constructor(private toastr: ToastrService) { }

  /** Create curried handleError function that already knows the service name */
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T>(serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      let message = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        message = error.error.message;
      } else {
        // server-side error
        message = `server returned code ${error.status}`;
      }

      if (error.status === 0) {
        this.toastr.error('Connect to the VPN', 'Error');
      } else {
        this.toastr.error(error.error.message, 'Error');
      }
      // TODO: better job of transforming error for user consumption
      console.log(`${serviceName}: ${operation} failed: ${message}`);
      error.error.safeData = result;
      // Let the app keep running by returning a safe result.
      return throwError(error);
    };

  }
}
