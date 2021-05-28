import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import './database';

import sessionRoute from './routes/session.route';
import dashboardRoute from './routes/dashboard.route';
import authMiddleware from './utils/middleware/auth.middleware';

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
    this.app.use(dashboardRoute);
  }
}

export default new App().app;
