import jwt from 'jsonwebtoken';
import auth from '../utils/config/authorization';

export default function authorizationService(user) {
  const accessToken = jwt.sign({ id: user.steamid }, auth.secret, {
    expiresIn: auth.expiresIn,
  });

  return {
    user,
    accessToken,
  };
}
