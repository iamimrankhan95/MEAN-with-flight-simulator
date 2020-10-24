import { IFlight } from './../../../shared/models/flight.model';
import { Action } from '@ngrx/store';

export const actions = {
  ADD_FLIGHT: 'ADD_FLIGHT'
}

export class AddFlight implements Action {
  readonly type: string = actions.ADD_FLIGHT;
  payload: IFlight;
}
