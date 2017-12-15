import * as express from 'express';

class App {
  public express: any;

  constructor() {
    this.express = express();
  }
}

export default new App().express