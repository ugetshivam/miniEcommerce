const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');


// GET ALL THE PRODUCTS

router.get('/products', getProducts);

//  CREATE A PRODUCT

router.post('/products', createProduct);


// UPDATE A PRODUCT

router.put('/products/:id', updateProduct);

// DELETE A PRODUCT

router.delete('/products/:id', deleteProduct)



module.exports = router;