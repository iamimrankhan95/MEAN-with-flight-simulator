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

app.use((req,res,next)=>{
  console.log('first middlewear');
  next();
})

app.use((req,res,next)=>{
  res.send('helllooo oolllo');
})

module.exports = app;

