const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');
const signupSchema = require('../validators/auth.validator.js');
const validate = require('../middlewares/validate.middleware.js');
const loginSchema = require('../validators/login.validator.js');
const authMiddleware = require('../middlewares/auth.middleware.js')

router.route('/').get(authController.home);

router.route('/register').post(validate(signupSchema), authController.register);

router.route('/login').post(validate(loginSchema), authController.login);

router.route('/user').get(authMiddleware, authController.user);

module.exports = router;
