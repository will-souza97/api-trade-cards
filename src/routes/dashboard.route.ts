import { Router } from 'express';

import DashboardController from '../controllers/dashboard.controller';

const router = Router();

router.get('/', DashboardController.execute);

export default router;
