export interface IFlightDto {
  _Id: string;
  AirlineLogoAddress: string; // "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif",
  AirlineName: string; // "China Southern Airlines",
  InboundFlightsDuration: string; // "24:10",
  ItineraryId: string; // "",
  OutboundFlightsDuration: string; // "26:20",
  Stops: number; // 2,
  TotalAmount: number; // 2903.84
  DepartureAirportCode: string; // = "MEl",
  ArrivalAirportCode: string; // = "LHR",
  DepartureDate: string; // = "2012-12-24T00:00:00+11:00",
  ReturnDate: string; // = "2013-01-03T00:00:00+11:00"
}
