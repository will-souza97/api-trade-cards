import jwt from 'jsonwebtoken';
import auth from '../utils/config/auth';

export default function userService(id, user) {
  const accessToken = jwt.sign({ id }, auth.secret, {
    expiresIn: auth.expiresIn,
  });

  return {
    user,
    accessToken,
  };
}
