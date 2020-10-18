import mongoose from 'mongoose';
const { Schema } = mongoose;

const flightSchema = new Schema({
  AirlineLogoAddress: { type: String },
  AirlineName: { type: String, required: true },
  InboundFlightsDuration: { type: Number, default: Date.now },
  ItineraryId: { type: Number, default: Date.now },
  OutboundFlightsDuration: { type: String, default: Date.now },
  Stops: { type: Number, required: true },
  TotalAmount: { type: Number, required: true },
  DepartureAirportCode: { type: String, required: true },
  ArrivalAirportCode: { type: String, required: true },
  DepartureDate: { type: Date, required: true },
  ReturnDate: { type: Date, required: true },
});

module.exports = mongoose.model('post', flightSchema)
