const express = require('express');
const router = express.Router();
const { contactForm, getAllContacts } = require("../controllers/contact.controller.js");
const adminMiddleware = require("../middlewares/admin.middleware.js");
const authMiddleware = require('../middlewares/auth.middleware.js');


router.route('/contact').post(contactForm);
router.route('/admin/contact').get(authMiddleware, adminMiddleware, getAllContacts);

module.exports = router;