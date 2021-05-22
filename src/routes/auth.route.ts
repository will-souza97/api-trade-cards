import { Router } from 'express';

import AuthController from '../controllers/auth.controller';

const router = Router();

router.get('/auth/steam', AuthController.redirectUrl);
router.get('/auth/steam/authenticate', AuthController.authenticate);

export default router;
