import { Router } from 'express';

import SessionController from '../controllers/session.controller';
import authMiddleware from '../utils/middleware/auth.middleware';

const router = Router();

router.get('/session/steam', SessionController.redirectUrl);
router.get('/session/steam/authenticate', SessionController.authenticate);

router.use(authMiddleware);

export default router;
