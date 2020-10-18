import { ServerResponse } from './../src/app/shared/models/dto/serverResponse';

const express = require('express');
const app = express();
// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//   res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
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

app.use('/api/test',(req, res, next) => {
  const response: ServerResponse = { info: 'd', id: 1, message: 'asdf', responseList: [], responseObject: {}, status: '200' };
  return res.status(200).json(
    response
  );
});

module.exports = app;

