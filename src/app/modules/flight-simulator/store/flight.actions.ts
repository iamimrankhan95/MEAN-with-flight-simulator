import { IFlight } from './../../../shared/models/flight.model';
import { Action } from '@ngrx/store';

export const actions = {
  ADD_FLIGHT: 'ADD_FLIGHT',
  ADD_FLIGHTS: 'ADD_FLIGHTS'
}

export class AddFlight implements Action {
  readonly type = actions.ADD_FLIGHT;

  constructor(public payload: IFlight) { }
}

export class AddFlights implements Action {
  readonly type = actions.ADD_FLIGHTS;

  constructor(public payload: IFlight[]) { }
}

export type flightActionType = AddFlight | AddFlights;
