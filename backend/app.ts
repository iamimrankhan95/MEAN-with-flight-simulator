import { ServerResponse } from './../src/app/shared/models/dto/serverResponse';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Flight = require('./models/flight.model');
// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//   res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// header
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/flight', (req, res, next) => {
  console.log(req.body);
  const flight = new Flight({
    AirlineLogoAddress: req.body.AirlineLogoAddress,
    AirlineName: req.body.AirlineName,
    InboundFlightsDuration: req.body.InboundFlightsDuration,
    ItineraryId: req.body.ItineraryId,
    OutboundFlightsDuration: req.body.OutboundFlightsDuration,
    Stops: req.body.Stops,
    TotalAmount: req.body.TotalAmount,
    DepartureAirportCode: req.body.DepartureAirportCode,
    ArrivalAirportCode: req.body.ArrivalAirportCode,
    DepartureDate: new Date('2016-10-05T14:48:00.000'),
    ReturnDate: new Date(req.body.ReturnDate),
  });
  console.log('flight: ', flight);
  console.log('----: ');
});
// O4erKVjU1cpfH2iG
app.get('/api/test', (req, res, next) => {
  const response: ServerResponse = {
    message: 'asdf', data: [], paginationObject: {}, status: '200'
  };
  return res.status(200).json(
    response
  );
});

module.exports = app;

