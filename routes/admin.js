const path = require("path");
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

// router.get('/admin', (req, res, next) =>{
//     res.render('admin/product-admin', {pageTitle: 'Product admin', pageNav: '/admin'})
//  })

router.get("/admin", adminController.productAdmin);

router.post("/admin", adminController.addProduct);

module.exports = router;
