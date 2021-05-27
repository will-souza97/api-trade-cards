import jwt from 'jsonwebtoken';
import auth from '../utils/config/auth';

export default function sessionService(user) {
  const accessToken = jwt.sign({ id: user.steamid }, auth.secret, {
    expiresIn: auth.expiresIn,
  });

  return {
    user,
    accessToken,
  };
}
