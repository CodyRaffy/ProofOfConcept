import app from './App';
import * as express from 'express';
var path = require('path');

const port = process.env.PORT || 3000

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err)
  }

  app.use("/public", express.static(path.join(__dirname, 'public')));

  return console.log(`server is listening on ${port}`)
})