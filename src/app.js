const express = require('express');
require('dotenv/config');

const authRoute = require('./routes/auth.route');

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    // this.app.use(cors());
  }

  routes() {
    this.app.use(authRoute);
  }
}

module.exports = new App().app;
