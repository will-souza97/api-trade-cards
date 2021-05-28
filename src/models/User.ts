import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  steamid: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
  },

  avatar_url: {
    type: String,
  },

  inventory_url: {
    type: String,
  },

  trade_url: {
    type: String,
  },
});

export default model('User', UserSchema);
