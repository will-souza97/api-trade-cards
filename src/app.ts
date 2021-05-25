import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import './database';

import sessionRoute from './routes/session.route';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private routes() {
    this.app.use(sessionRoute);
  }
}

export default new App().app;
