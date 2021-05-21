const SteamAuth = require('blaz-steam-api');

const steam = new SteamAuth({
  realm: process.env.BASE_URL,
  returnUrl: `${process.env.BASE_URL}/auth/steam/authenticate`,
  apiKey: process.env.API_KEY,
});

module.exports = steam;
