import mongoose from 'mongoose';

class Database {
  mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.init();
  }

  private init() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
