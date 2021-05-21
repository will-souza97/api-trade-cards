const steamAuth = require('../utils/config/steam');
const axios = require('axios');

class AuthController {
  async redirectUrl(request, response) {
    try {
      const redirectUrl = await steamAuth.getRedirectUrl();

      return response.redirect(redirectUrl);
    } catch (error) {
      console.error(error);
    }
  }

  async authenticate(request, response) {
    try {
      const steamUser = await steamAuth.authenticate(request);
      const { data } = await axios.get(
        `http://steamcommunity.com/profiles/${steamUser.steamid}/inventory/json/753/6`
      );

      const { rgInventory, rgDescriptions } = data;

      return response.json({ rgInventory, rgDescriptions });

      // return res.json(steamUser);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new AuthController();
