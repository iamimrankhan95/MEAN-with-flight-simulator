const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const Flight = require('./models/flight');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://iamimrankhan95:O4erKVjU1cpfH2iG@cluster0.ymxcc.mongodb.net/MEAN-with-flight-simulator?retryWrites=true&w=majority&', { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });
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
    DepartureDate: req.body.DepartureDate,
    ReturnDate: req.body.ReturnDate,
  });
  flight.save();
  console.log('flight: ', flight);
  console.log('----: ');
  const response = {
    message: 'asdf', data: [], paginationObject: {}, status: '200'
  };
  response.message = 'saved successfully!';
  return res.status(200).json(
    response
  );
});

app.get('/api/flight', async (req, res, next) => {
  const response = {
    message: 'asdf', data: [], paginationObject: {}, status: '200'
  };
  const flights = await Flight.find({});
  response.data = flights;
  return res.status(200).json(
    response
  );
});

app.delete('/api/flight', async (req, res, next) => {
  const response = {
    message: 'asdf', data: [], paginationObject: {}, status: '200'
  };
  const flights = await Flight.find({});
  response.data = flights;
  return res.status(200).json(
    response
  );
});

module.exports = app;

