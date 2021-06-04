import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import './database';
import tradeUrlRoute from './routes/tradeUrl.route';
import userRoute from './routes/user.route';
import authorizationMiddleware from './utils/middleware/authorization.middleware';

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
    this.app.use(userRoute);
    this.app.use(authorizationMiddleware);
    this.app.use(tradeUrlRoute);
  }
}

export default new App().app;
