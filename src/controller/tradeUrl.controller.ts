import { Request, Response } from 'express';
import User from '../models/user.model';

class TradeUrlController {
  async execute(request: Request, response: Response) {
    const { trade_url } = request.body;
    // @ts-ignore-
    const { id } = request.uid;

    await User.updateOne({ steamid: id }, { $set: { trade_url } });

    return response.json({ trade_url });
  }
}

export default new TradeUrlController();
