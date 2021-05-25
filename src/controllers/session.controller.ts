import { Request, Response } from 'express';
import steamAuth from '../utils/config/steam';
import axios from 'axios';
import jwt from 'jsonwebtoken';

class SessionController {
  async redirectUrl(response: Response) {
    try {
      const redirectUrl = await steamAuth.getRedirectUrl();

      return response.redirect(redirectUrl);

      return [];
    } catch (error) {
      console.error(error);
    }
  }

  async authenticate(request: Request, response: Response) {
    try {
      const steamUser = await steamAuth.authenticate(request);
      const { data } = await axios.get(
        `http://steamcommunity.com/profiles/${steamUser.steamid}/inventory/json/753/6`
      );

      const { rgInventory, rgDescriptions } = data;

      return response.json({ steamUser, rgInventory, rgDescriptions });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new SessionController();
