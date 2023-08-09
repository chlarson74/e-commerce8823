const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Prefix all routes defined in `category-routes.js` with `/categories`
router.use('/categories', categoryRoutes); //this is provided code
// Prefix all routes defined in `product-routes.js` with `/products`
router.use('/products', productRoutes); //this is provided code
// Prefix all routes defined in `tag-routes.js` with `/tags`
router.use('/tags', tagRoutes); //this is provided code

module.exports = router;
