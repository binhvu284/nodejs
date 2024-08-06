const Product = require("../models/product");

exports.productAdmin = (req, res, next) => {
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("admin/product-admin", {
        prods: rows,
        pageTitle: "Product Admin",
        pageNav: "/admin",
      });
    })
    .catch();
};

exports.addProduct = (req, res, next) => {
  const name = req.body.name;
  const category = req.body.category;
  const price = req.body.price;

  const product = new Product(name, category, price);
  product.save();
  res.redirect("/admin");
};
