import { Request, Response } from 'express';
import User from '../models/User';

class DashboardController {
  async execute(request: Request, response: Response) {
    const { trade_url } = request.body;
    // @ts-ignore-
    const { id } = request.uid;

    await User.updateOne({ steamid: id }, { $set: { trade_url: trade_url } });

    return response.json({ trade_url });
  }
}

export default new DashboardController();
