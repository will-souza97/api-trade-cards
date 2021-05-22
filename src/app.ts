import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import authRoute from './routes/auth.route';

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
    this.app.use(authRoute);
  }
}

export default new App().app;