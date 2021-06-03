import { Router } from 'express';
import TradeUrlController from '../controller/tradeUrl.controller';

const router = Router();

router.put('/tradeurl', TradeUrlController.execute);

export default router;
