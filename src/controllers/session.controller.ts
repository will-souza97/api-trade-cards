import { Request, Response } from 'express';
import User from '../models/User';
import userService from '../services/user.service';
import steamAuth from '../utils/config/steam';

class SessionController {
  async redirectUrl(_: any, response: Response) {
    try {
      const url = await steamAuth.getRedirectUrl();

      return response.redirect(url);
    } catch (error) {
      console.error(error);
    }
  }

  async authenticate(request: Request, response: Response) {
    try {
      const { steamid, name, avatar } = await steamAuth.authenticate(request);

      const userAlreadyExists = await User.findOne({ steamid });

      if (!userAlreadyExists) {
        const user = await new User({
          steamid,
          name,
          avatar_url: avatar.small,
          inventory_url: `http://steamcommunity.com/profiles/${steamid}/inventory/json/753/6`,
          trade_url: null,
        });

        await user.save();

        return response.json(userService(user));
      }

      return response.json(userService(userAlreadyExists));
    } catch (error) {
      console.error(error);
    }
  }
}

export default new SessionController();
