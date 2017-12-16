require('module-alias/register')
import app from './App';
import * as express from 'express';
import * as playersApi from "./api/PlayersApi";
var path = require("path")

const port = process.env.PORT || 3000

app.listen(port, (err: any) => {
  if (err) {
    return console.log(err)
  }

  //set default options and default '/' root
  var options = {
    index: "index.html",
    maxAge: 31557600000
  };
  app.use("/", express.static(path.join(__dirname, "public"), options));


  app.get('/api/players', (req: any, res: any) => {
    res.json(playersApi.getAllPlayers())
  })

  return console.log(`server is listening on ${port}`)
})