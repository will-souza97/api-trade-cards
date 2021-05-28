import { Request, Response } from 'express';
import User from '../models/User';
import sessionService from '../services/session.service';
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
      const steamUser = await steamAuth.authenticate(request);

      const { steamid, name, avatar } = steamUser;

      const userAlreadyExists = await User.findOne({ steamid });

      if (!userAlreadyExists) {
        const user = await new User({
          steamid,
          name: name || steamUser.username,
          avatar_url: avatar.small,
          inventory_url: `http://steamcommunity.com/profiles/${steamid}/inventory/json/753/6`,
        });

        await user.save();

        return response.json(sessionService(user));
      }

      return response.json(sessionService(userAlreadyExists));
    } catch (error) {
      console.error(error);
    }
  }
}

export default new SessionController();
