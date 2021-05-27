import { Schema, model } from 'mongoose';

interface IUser {
  steamid: string;
  name: string;
  avatar_url: string;
  inventory_url: string;
  trade_url: string;
}

const UserSchema = new Schema<IUser>({
  steamid: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  avatar_url: {
    type: String,
    required: true,
  },

  inventory_url: {
    type: String,
    required: true,
  },

  trade_url: {
    type: String,
    unique: true,
  },
});

export default model<IUser>('User', UserSchema);
