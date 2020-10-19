const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema({
  AirlineLogoAddress: { type: String, default: "http://nmflightapi.azurewebsites.net/Images/AirlineLogo/CZ.gif" },
  AirlineName: { type: String, required: true },
  InboundFlightsDuration: { type: String, default: '21:00' },
  ItineraryId: { type: Number },
  OutboundFlightsDuration: { type: String, default: '22:22' },
  Stops: { type: Number, required: true },
  TotalAmount: { type: Number, required: true },
  DepartureAirportCode: { type: String, required: true },
  ArrivalAirportCode: { type: String, required: true },
  DepartureDate: { type: Date, required: true },
  ReturnDate: { type: Date, required: true },
});

module.exports = mongoose.model('Flight', flightSchema);
