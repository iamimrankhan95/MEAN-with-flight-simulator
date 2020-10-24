import * as FlightActions from './flight.actions';

const initialState = {
  flights: [{
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
  }]
};

export function flightReducer(state = initialState, action: FlightActions.AddFlight) {
  switch (action.type) {
    case FlightActions.actions.ADD_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload]
      };

    default:
      return state;
  }
}
