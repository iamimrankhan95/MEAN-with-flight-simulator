import { ServerResponse } from './../src/app/shared/models/dto/serverResponse';
const bodyParser = require('body-parser');
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

app.post('/api/test', (req, res, next) => {
  console.log('post', req.body);
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

