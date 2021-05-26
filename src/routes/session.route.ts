import { Router } from 'express';

import SessionController from '../controllers/session.controller';

const router = Router();

router.get('/session/steam', SessionController.redirectUrl);
router.get('/session/steam/authenticate', SessionController.authenticate);

export default router;
