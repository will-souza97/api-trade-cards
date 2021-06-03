import { Router } from 'express';

import UserController from '../controller/user.controller';

const router = Router();

router.get('/user', UserController.index);
router.post('/user', UserController.create);

export default router;
