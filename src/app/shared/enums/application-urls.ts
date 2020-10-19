import { environment } from '../../../environments/environment';

export const applicationUrl = {
  flightSimulator: {
    read: 'assets/flights.json',
  },
  flight: {
    readList: '/api/flight',
    create: '/api/flight'
  }
};
