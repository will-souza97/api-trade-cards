import mongoose from 'mongoose';

class Database {
  public mongoConnection: typeof mongoose;

  constructor() {
    this.connection(process.env.MONGO_URL);
  }

  private async connection(uri: string): Promise<void> {
    this.mongoConnection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
