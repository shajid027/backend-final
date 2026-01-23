const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');
const adminMiddleware = require('../middlewares/admin.middleware.js');

// Shobai dekhte parbe
router.route('/').get(productController.getAllProducts);

//  Login thakte hobe (auth) + Admin hote hobe (admin)
router.route('/add').post(authMiddleware, adminMiddleware, productController.createProduct);
router.route('/update/:id').patch(authMiddleware, adminMiddleware, productController.updateProduct);
router.route('/delete/:id').delete(authMiddleware, adminMiddleware, productController.deleteProduct);

module.exports = router;