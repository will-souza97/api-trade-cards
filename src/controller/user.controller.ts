import axios from 'axios';
import { Request, Response } from 'express';
import User from '../models/user.model';
import authorizationService from '../services/authorization.service';
import {
  getAllCardsService,
  getCardsService,
} from '../services/getCards.service';
import steamAPI from '../utils/config/steamAPI';

class UserController {
  async index(request: Request, response: Response) {
    const users = await User.find();

    // @ts-ignore-
    const cards = getAllCardsService(users);

    return response.json(cards);
  }

  async create(request: Request, response: Response) {
    const { username } = request.body;

    const steamID = await steamAPI.resolve(
      `https://steamcommunity.com/id/${username}`
    );

    const userAlreadyExists = await User.findOne({ steamid: steamID });

    if (userAlreadyExists) {
      return response.json(authorizationService(userAlreadyExists));
    }

    const { nickname, realName, avatar } = await steamAPI.getUserSummary(
      steamID
    );

    const { data } = await axios.get(
      `http://steamcommunity.com/profiles/${steamID}/inventory/json/753/6`
    );

    const cards = getCardsService(data.rgInventory, data.rgDescriptions);

    const user = await new User({
      steamid: steamID,
      nickname,
      realName,
      avatar_url: avatar.small,
      cards,
    });

    await user.save();

    return response.json(authorizationService(user));
  }
}

export default new UserController();
