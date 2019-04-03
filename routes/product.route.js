const express = require('express');
const router = express.Router();

// Require the controller
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

// 1ª task in my CRUD, Create a new product.
router.post('/create', product_controller.product_create);
// 2º task in my CRUD, Read an existing product.
router.get('/:id', product_controller.product_details); 
// 3º task in my CRUD, Update an existing product.
router.put('/:id/update', product_controller.product_update);
// 4º task in my CRUD, Delete an existing product.
router.delete('/:id/delete', product_controller.product_delete);
