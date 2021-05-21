const { Router } = require('express');

const AuthController = require('../controller/auth.controller');

const router = Router();

router.get('/auth/steam', AuthController.redirectUrl);
router.get('/auth/steam/authenticate', AuthController.authenticate);

module.exports = router;
