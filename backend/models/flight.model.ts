const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema({
  AirlineLogoAddress: { type: String },
  AirlineName: { type: String, required: true },
  InboundFlightsDuration: { type: Number },
  ItineraryId: { type: Number },
  OutboundFlightsDuration: { type: String },
  Stops: { type: Number, required: true },
  TotalAmount: { type: Number, required: true },
  DepartureAirportCode: { type: String, required: true },
  ArrivalAirportCode: { type: String, required: true },
  DepartureDate: { type: Date, required: true },
  ReturnDate: { type: Date, required: true },
});

module.exports = mongoose.model('Flight', flightSchema);
