import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import authRoute from './routes/auth.route';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(authRoute);
  }
}

export default new App().app;
