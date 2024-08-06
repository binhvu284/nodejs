const Product = require("../models/product");

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("guest/product-list", {
      prods: products,
      pageTitle: "Product",
      pageNav: "/product",
    });
  });
};

exports.getProductid = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("guest/product-detail", {
      product: product,
      pageTitle: "hehe",
      pageNav: "/product",
    });
  });
};
