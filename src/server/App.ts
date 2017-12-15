import * as express from 'express';
import * as playersApi from "./api/PlayersApi";
var path = require("path")

class App {
  public express: any;

  constructor() {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    const router = express.Router()
    router.get('/', function (req, res) {
      console.log(path.join(__dirname, '../'));
      res.sendFile("index.html", { root: path.join(__dirname, '../../dest/public') });
    }),
      router.get('/api/players', (req: any, res: any) => {
        res.json(playersApi.getAllPlayers())
      })
    this.express.use('/', router)
  }
}

export default new App().express