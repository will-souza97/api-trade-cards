import { model, Schema } from 'mongoose';
import { IUser } from '../entities/user.entity';

const UserSchema = new Schema<IUser>({
  steamid: {
    type: String,
    required: true,
    unique: true,
  },

  nickname: {
    type: String,
  },

  realName: {
    type: String,
  },

  avatar_url: {
    type: String,
    required: true,
  },

  cards: {
    type: [
      {
        cardid: {
          type: String,
          required: true,
          unique: true,
        },

        icon_url: String,

        name: String,

        game: String,
      },
    ],
  },

  trade_url: String,
});

export default model<IUser>('User', UserSchema);
