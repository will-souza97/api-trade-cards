// @ts-ignore-
import SteamAuth from 'blaz-steam-api';

const steam = new SteamAuth({
  realm: process.env.BASE_URL,
  returnUrl: `${process.env.BASE_URL}/session/steam/authenticate`,
  apiKey: process.env.API_KEY,
});

export default steam;
