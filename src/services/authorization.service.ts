import jwt from 'jsonwebtoken';
import { ICard } from '../entities/card.entity';
import { IUser } from '../entities/user.entity';
import auth from '../utils/config/authorization';

export default function authorizationService(user: IUser, cards: ICard[]) {
  const accessToken: string = jwt.sign({ id: user.steamid }, auth.secret, {
    expiresIn: auth.expiresIn,
  });

  return {
    user,
    cards,
    accessToken,
  };
}
