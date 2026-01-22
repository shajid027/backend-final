const express = require('express');
const router = express.Router();
const contactForm = require("../controllers/contact.controller.js")
const authMiddleware = require("../middlewares/auth.middleware.js")

router.route('/contact').post(contactForm);


module.exports = router;