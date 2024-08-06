const path = require('path');
const express = require('express');

const router = express.Router();

const productController = require('../controllers/product')

router.get('/product', productController.getProduct );

router.get('/product/:productId', productController.getProductid);

router.get('/', (req, res, next) =>{
    res.render('guest/index', {pageTitle: 'Taskcover', pageNav: '/'})
 })

router.get('/task', (req, res, next) => {
    res.render('guest/task', {pageTitle: 'Task Management', pageNav: '/task'})
});

router.get('/cart', (req, res, next) => {
    res.render('guest/cart', {pageTitle: 'Cart', pageNav: '/cart'})
});

module.exports = router
