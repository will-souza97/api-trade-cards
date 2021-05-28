import { Router } from 'express';

import DashboardController from '../controllers/dashboard.controller';
import authMiddleware from '../utils/middleware/auth.middleware';

const router = Router();

router.use(authMiddleware);

router.get('/dashboard', DashboardController.execute);

export default router;
