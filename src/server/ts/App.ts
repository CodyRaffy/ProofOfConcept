import * as express from 'express'
import * as playersApi from "./api/PlayersApi"

class App {
  public express: any;

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req: any, res: any) => {
      res.json({
        message: 'Hello World!'
      })
    }),
    router.get('/api/players', (req: any, res: any) => {
      res.json(playersApi.getAllPlayers())
    })
    this.express.use('/', router)
  }
}

export default new App().express