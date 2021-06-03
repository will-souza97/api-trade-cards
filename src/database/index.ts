import mongoose from 'mongoose';

class Database {
  public mongoConnection: Promise<typeof mongoose>;

  constructor() {
    this.connection(process.env.MONGO_URL);
  }

  private connection(uri: string) {
    this.mongoConnection = mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
